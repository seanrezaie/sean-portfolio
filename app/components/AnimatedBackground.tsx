'use client';

import { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    // Animation Settings
    const GENERATION_DURATION = 35000; // Time in ms to generate new pipes (35 seconds)

    // Available colors for pipes
    const colors = [
      'rgba(255, 255, 255, OPACITY)', // white
      'rgba(59, 130, 246, OPACITY)',  // blue
      'rgba(234, 179, 8, OPACITY)',   // yellow
      'rgba(239, 68, 68, OPACITY)',   // red
      'rgba(147, 51, 234, OPACITY)',  // purple
    ];
    
    // Randomly select one color for this session
    const selectedColor = colors[Math.floor(Math.random() * colors.length)];

    // Adjust speed based on screen width
    const getSpeedFactors = () => {
      const width = window.innerWidth;
      if (width >= 1920) { // Large screens (desktop)
        return { base: 2.0, range: 1.0 };  // Twice as fast
      } else if (width >= 1280) { // Medium-large screens
        return { base: 1.5, range: 0.75 };  // 50% faster
      }
      return { base: 1, range: 0.5 }; // Default/smaller screens (laptops)
    }

    const { base: baseSpeed, range: rangeSpeed } = getSpeedFactors();

    // Constants
    const pipeCount = 20;
    const pipePropCount = 8;
    const pipePropsLength = pipeCount * pipePropCount;
    const turnCount = 8;
    const turnAmount = (360 / turnCount) * (Math.PI / 180);
    const turnChanceRange = 58;
    const baseTTL = 100;
    const rangeTTL = 300;
    const baseWidth = 1;
    const rangeWidth = 1;
    const backgroundColor = 'hsla(220, 10%, 10%, 1)'; // Subtle grayish-blue background


    let canvas = {
      a: document.createElement('canvas'),
      b: document.createElement('canvas'),
    };
    let ctx: { a: CanvasRenderingContext2D; b: CanvasRenderingContext2D };
    let center: [number, number] = [0, 0];
    let tick = 0;
    let pipeProps: Float32Array;
    let startTime = Date.now();

    // Helper functions
    const rand = (max: number) => Math.random() * max;
    const fadeInOut = (t: number, m: number) => {
      const hm = 0.5 * m;
      return Math.abs((t + hm) % m - hm) / hm;
    };
    const round = Math.round;
    const cos = Math.cos;
    const sin = Math.sin;
    const TAU = 2 * Math.PI;

    function initPipe(i: number) {
      const x = rand(canvas.a.width);
      const y = rand(canvas.a.height); // Randomize initial Y position
      const direction = rand(TAU);
      const speed = baseSpeed + rand(rangeSpeed);
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const width = baseWidth + rand(rangeWidth);
      const hue = 0;

      pipeProps.set([x, y, direction, speed, life, ttl, width, hue], i);
    }

    function initPipes() {
      pipeProps = new Float32Array(pipePropsLength);

      for (let i = 0; i < pipePropsLength; i += pipePropCount) {
        initPipe(i);
      }
    }

    function updatePipe(i: number) {
      const i2 = i + 1;
      const i3 = i + 2;
      const i4 = i + 3;
      const i5 = i + 4;
      const i6 = i + 5;
      const i7 = i + 6;
      const i8 = i + 7;

      let x = pipeProps[i];
      let y = pipeProps[i2];
      let direction = pipeProps[i3];
      const speed = pipeProps[i4];
      let life = pipeProps[i5];
      const ttl = pipeProps[i6];
      const width = pipeProps[i7];
      const hue = pipeProps[i8];

      drawPipe(x, y, life, ttl, width, hue);

      life++;
      x += cos(direction) * speed;
      y += sin(direction) * speed;
      const turnChance =
        !(tick % round(rand(turnChanceRange))) &&
        (!(round(x) % 6) || !(round(y) % 6));
      const turnBias = round(rand(1)) ? -1 : 1;
      direction += turnChance ? turnAmount * turnBias : 0;

      pipeProps[i] = x;
      pipeProps[i2] = y;
      pipeProps[i3] = direction;
      pipeProps[i5] = life;

      checkBounds(x, y);

      if (life > ttl) {
        if (Date.now() - startTime < GENERATION_DURATION) {
          initPipe(i);
        } else {
          pipeProps[i5] = ttl + 1; // Keep life greater than ttl to prevent regeneration
        }
      }
    }

    function drawPipe(
      x: number,
      y: number,
      life: number,
      ttl: number,
      width: number,
      hue: number
    ) {
      ctx.a.save();
      ctx.a.strokeStyle = selectedColor.replace('OPACITY', `${fadeInOut(life, ttl) * 0.125}`);
      ctx.a.lineWidth = width;
      ctx.a.beginPath();
      ctx.a.moveTo(x, y);
      ctx.a.lineTo(x + 2, y + 2); // Linear paths for map-like appearance
      ctx.a.stroke();
      ctx.a.closePath();
      ctx.a.restore();
    }

    function checkBounds(x: number, y: number) {
      if (x > canvas.a.width) x = 0;
      if (x < 0) x = canvas.a.width;
      if (y > canvas.a.height) y = 0;
      if (y < 0) y = canvas.a.height;
    }

    function updatePipes() {
      tick++;
      for (let i = 0; i < pipePropsLength; i += pipePropCount) {
        updatePipe(i);
      }
    }

    function render() {
      ctx.b.save();
      ctx.b.fillStyle = backgroundColor;
      ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);
      ctx.b.restore();

      ctx.b.save();
      ctx.b.filter = 'blur(3px)'; // Subtle blur for smooth effect
      ctx.b.drawImage(canvas.a, 0, 0);
      ctx.b.restore();

      ctx.b.save();
      ctx.b.drawImage(canvas.a, 0, 0);
      ctx.b.restore();
    }

    function draw() {
      updatePipes();
      render();
      window.requestAnimationFrame(draw);
    }

    function setup() {
      canvas.b.setAttribute('style', `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
      `);
      document.body.appendChild(canvas.b);
      ctx = {
        a: canvas.a.getContext('2d')!,
        b: canvas.b.getContext('2d')!,
      };

      resize();
      initPipes();
      draw();
    }

    function resize() {
      const { innerWidth, innerHeight } = window;

      canvas.a.width = innerWidth;
      canvas.a.height = innerHeight;

      canvas.b.width = innerWidth;
      canvas.b.height = innerHeight;

      center = [0.5 * canvas.a.width, 0.5 * canvas.a.height];
    }

    setup();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (canvas.b.parentNode) {
        canvas.b.parentNode.removeChild(canvas.b);
      }
    };
  }, []);

  return null;
};

export default AnimatedBackground;

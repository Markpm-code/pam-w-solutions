import React, { useEffect, useRef } from 'react';

interface Snowflake {
    x: number;
    y: number;
    radius: number;
    speed: number;
}

const SnowParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const snowflakes: Snowflake[] = [];
        const maxSnowflakes = 100;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createSnowflakes = () => {
            for (let i = 0; i < maxSnowflakes; i++) {
                snowflakes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 3 + 1,
                    speed: Math.random() * 1 + 0.5,
                });
            }
        };

        const updateSnowflakes = () => {
            for (const flake of snowflakes) {
                flake.y += flake.speed;
                if (flake.y > canvas.height) {
                    flake.y = 0;
                    flake.x = Math.random() * canvas.width;
                }
            }
        };

        const drawSnowflakes = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            ctx.beginPath();
            for (const flake of snowflakes) {
                ctx.moveTo(flake.x, flake.y);
                ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            }
            ctx.fill();
        };

        const animate = () => {
            updateSnowflakes();
            drawSnowflakes();
            requestAnimationFrame(animate);
        };

        resizeCanvas();
        createSnowflakes();
        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none', // Prevents interactions
                zIndex: -1, // Behind other content
            }}
        />
    );
};

export default SnowParticles;

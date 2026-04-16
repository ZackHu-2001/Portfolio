'use client';

import React, { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // 设置canvas尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 字符集 - 包含字母、数字和一些特殊字符
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()";
    const charArray = chars.split("");

    const fontSize = 12;
    const columnSpacing = 40; // 增加列间距
    const columns = Math.floor(canvas.width / columnSpacing);

    // 每列的当前Y位置（随机初始化，让每列从不同位置开始）
    const maxRows = Math.ceil(canvas.height / fontSize);
    const drops: number[] = Array(columns)
      .fill(0)
      .map(() => Math.floor(Math.random() * maxRows) - maxRows);

    // 存储每列的字符（固定字符，不重叠）
    const columnChars: string[][] = [];
    for (let i = 0; i < columns; i++) {
      columnChars[i] = [];
    }

    const draw = () => {
      // 完全清除画布，重新绘制
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * columnSpacing;
        const y = drops[i] * fontSize;

        // 生成新字符并存储
        const newChar = charArray[Math.floor(Math.random() * charArray.length)];
        columnChars[i][drops[i]] = newChar;

        // 头部字符 - 亮白色
        ctx.fillStyle = "#fff";
        ctx.fillText(newChar, x, y);

        // 绘制尾部字符（使用存储的固定字符）
        const tailLength = 15;
        for (let j = 1; j <= tailLength; j++) {
          const charIndex = drops[i] - j;
          if (charIndex > 0 && columnChars[i][charIndex]) {
            const alpha = Math.max(0, 1 - j * 0.07);
            ctx.fillStyle = `rgba(0, 160, 0, ${alpha})`;
            ctx.fillText(columnChars[i][charIndex], x, y - fontSize * j);
          }
        }

        // 当字符到达底部或随机重置
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          columnChars[i] = []; // 清除该列的字符
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* 内容覆盖层 */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-32">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-32">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-yellow-500 fill-current"
          >
            <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
          </svg>
          <span className="text-white text-2xl font-semibold">LeetCode</span>
        </div>

        {/* 主标题 */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          System Under Maintenance
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-2 animate-pulse"></span>
        </h1>

        {/* 描述 */}
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          Our site is undergoing a short maintenance window from 10:00 PM until
          10:10 PM UTC. We'll be back online in just a few minutes. Thanks for
          your understanding!.
        </p>

        {/* 按钮 */}
        <div className="flex items-center gap-6">
          <button className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200 transition">
            Refresh Page
          </button>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Need Help
          </a>
        </div>

        {/* 版权 */}
        <div className="absolute bottom-8 left-16 text-gray-500 text-sm">
          Copyright © 2026 LeetCode LLC
        </div>
      </div>
    </div>
  );
}

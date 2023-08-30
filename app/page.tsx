"use client"
import { useState, useEffect, useRef } from 'react';
import { AreaChart, ResponsiveContainer, XAxis, YAxis, Area, Text, Label } from 'recharts'

interface GameData {
  multiplier: number,
  seconds: number
}
export default function Home() {
  const [data, setData] = useState<GameData[]>([])
  const areaRef = useRef()
  useEffect(() => {
    let temp_data = [];
    const max_multiplier = Math.floor(Math.random() * 10);
    for (let i = 0; i <= max_multiplier; i++) {
      // parabolic 
      const multiplier = Math.pow(i, 2); // Calculate the square of seconds
      temp_data.push({
        multiplier: multiplier <= 0 ? 0.1 : multiplier,
        seconds: i
      });
    }
    setData(temp_data);
  }, []);
  return (
    <main className="flex fixed w-full h-full justify-center items-center p-4">
      <div className=" w-full md:w-[600px] p-4 dark:bg-zinc-900 rounded-md shadow ">
        <div className='flex justify-center items-center p-4'>
          <h1 className='text-3xl font-bold'>🚀 Crash</h1>
        </div>
        <ResponsiveContainer height={400}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}>
            <XAxis dataKey="seconds" tickCount={data.length / 2} />
            <YAxis dataKey="multiplier" tickCount={data.length / 2} tickFormatter={(multiplier: number) => `${multiplier}x`} />
            <Area
              repeatCount={2}
              animationDuration={5000}
              type="monotone"
              dataKey="multiplier"
              className=' stroke-blue fill-blue-400/20 '
              strokeWidth={10}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </main>
  )
}
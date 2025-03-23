import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [remainingDays, setRemainingDays] = useState(null);

    // 计算剩余天数的函数
    const calculateRemainingDays = (birthday) => {
        const birthday35 = new Date(birthday);
        birthday35.setFullYear(birthday35.getFullYear() + 35);

        const today = new Date();
        const timeDiff = birthday35 - today;
        const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        return daysLeft;
    };

    // 当组件挂载时运行，显示 prompt 让用户输入生日
    useEffect(() => {
        const birthday = prompt("请输入你的生日 (格式：YYYY-MM-DD):", "1990-01-01");
        const daysLeft = calculateRemainingDays(birthday);
        setRemainingDays(daysLeft);

        // 每天更新倒计时
        const interval = setInterval(() => {
            const updatedDays = calculateRemainingDays(birthday);
            setRemainingDays(updatedDays);
        }, 1000 * 60 * 60 * 24); // 每天更新一次

        // 清理定时器
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
            <h1>距离失业还有 <span id="days-left">{remainingDays !== null ? remainingDays : '...'}</span> 天</h1>
            {remainingDays <= 0 && <h2>你已失业</h2>}
        </div>
    );
};

export default Countdown;

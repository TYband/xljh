document.addEventListener('DOMContentLoaded', () => {
    const datetimeDisplay = document.getElementById('datetime-display');
    const trainingPlanDisplay = document.getElementById('training-plan-display');

    // 训练计划数据（直接从您提供的文本中提取并结构化）
    // 注意：这里手动解析和结构化了您的文本，未来如果计划很复杂，可以考虑更健壮的数据格式如 JSON。
    const trainingPlans = {
        '星期一': {
            title: '胸部 + 肩前束训练',
            goal: '强化胸部肌肉和肩部前侧力量，塑造上肢线条。',
            exercises: [
                { name: '固定器械：坐姿推胸 (Seated Chest Press Machine)', sets: '3-4组', reps: '10-15次', notes: '技巧：调整座椅高度，使把手与胸部中线齐平。推起重量时感受胸部收缩。固定器械安全性高，适合新手建立推的模式。TFCC注意：多数推胸机对手腕压力较小，因为是固定轨迹。' },
                { name: '自由器械：哑铃上斜卧推 (Dumbbell Incline Press)', sets: '3组', reps: '8-12次', notes: '重量建议：起始尝试每只手 3kg-6kg 哑铃。技巧：躺在上斜凳上，双手各持一哑铃，推起哑铃至手臂伸直（肘部微屈），感受胸部上束发力。自由器械需要更多稳定控制。TFCC注意：推起和下放时，保持手腕稳定中立，不要向后过度弯曲。' },
                { name: '固定器械：蝴蝶机夹胸 (Pec Deck Fly Machine)', sets: '3组', reps: '12-15次', notes: '技巧：调整座椅和把手，感受胸部收缩，将把手向中间夹拢。是很好的孤立胸部训练。TFCC注意：固定轨迹，手腕压力小。' },
                { name: '自由器械：哑铃前平举 (Dumbbell Front Raises)', sets: '3组', reps: '12-15次', notes: '重量建议：起始尝试每只手 1kg-3kg 哑铃。技巧：站立或坐姿，双手各持一哑铃，向前抬起至与肩同高，感受肩部前束收缩。控制下放速度。TFCC注意：压力较小，但仍需控制哑铃，避免晃动。' }
            ]
        },
        '星期二': {
            title: '休息日：30分钟爬坡',
            goal: '积极恢复',
            exercises: [
                { name: '跑步机爬坡', sets: '30分钟', reps: '坡度15，速度4', notes: '这种低到中等强度的有氧运动，有助于促进血液循环，加速肌肉恢复，同时也能帮助消耗卡路里，并对降低皮质醇有积极作用（前提是不过度）。' }
            ]
        },
        '星期三': {
            title: '背部 + 肩中束 & 肩后束训练',
            goal: '发展背部厚度和宽度，强化肩部中后侧，塑造背部和肩部线条。',
            exercises: [
                { name: '固定器械：高位下拉 (Lat Pulldown Machine)', sets: '3-4组', reps: '10-15次', notes: '技巧：调整膝垫，固定身体。向下拉动把手至胸前，感受背阔肌收缩。是建立背部力量和宽度的经典动作。TFCC注意：选择适合的把手握法（通常宽握对TFCC压力稍小），并保持手腕稳定。如果疼痛，尝试使用绳索把手（更灵活）。' },
                { name: '自由器械：哑铃单臂划船 (Dumbbell Single-Arm Rows)', sets: '每侧3组', reps: '8-12次', notes: '重量建议：起始尝试每只手 3kg-6kg 哑铃。技巧：一手扶凳，同侧膝盖跪凳，另一手持哑铃。背部挺直，将哑铃拉向腰部，感受背部肌肉（尤其是背阔肌）收缩。TFCC注意：保持手腕中立，不要向后弯曲。这是一个对TFCC相对友好的背部自由器械动作。' },
                { name: '固定器械：坐姿划船 (Seated Cable Row Machine)', sets: '3组', reps: '10-15次', notes: '技巧：身体坐直，向后拉动把手，感受背部中部和肩胛骨的挤压收缩。TFCC注意：可选择不同的把手（V形把手通常手腕压力最小），注意保持手腕中立。' },
                { name: '自由器械：哑铃侧平举 (Dumbbell Lateral Raises)', sets: '3组', reps: '12-15次', notes: '重量建议：起始尝试每只手 1kg-3kg 哑铃。技巧：身体直立，双手各持一哑铃，向两侧抬起至与肩同高，感受肩部中束肌肉收缩。控制下放速度。TFCC注意：压力较小，但仍需控制哑铃，避免晃动。' },
                { name: '自由器械：哑铃俯身飞鸟 (Dumbbell Bent-Over Lateral Raises)', sets: '3组', reps: '12-15次', notes: '重量建议：起始尝试每只手 1kg-2.5kg 哑铃。技巧：俯身，背部挺直，双手各持一哑铃向两侧抬起，感受肩部后束肌肉收缩。TFCC注意：压力较小，控制动作。' }
            ]
        },
        '星期四': {
            title: '休息日：30分钟爬坡',
            goal: '积极恢复',
            exercises: [
                { name: '跑步机爬坡', sets: '30分钟', reps: '坡度15，速度4', notes: '这种低到中等强度的有氧运动，有助于促进血液循环，加速肌肉恢复，同时也能帮助消耗卡路里，并对降低皮质醇有积极作用（前提是不过度）。' }
            ]
        },
        '星期五': {
            title: '手臂 + 腿部训练',
            goal: '发展手臂围度，强化下肢力量和臀部，提升整体下肢力量和稳定性。',
            exercises: [
                { name: '史密斯架深蹲 (Smith Machine Squat)', sets: '3-4组', reps: '8-12次', notes: '技巧：史密斯架提供固定轨迹，有助于初学者掌握深蹲模式。保持核心收紧，膝盖与脚尖方向一致，下蹲至大腿与地面平行或稍低，感受臀部和大腿发力。TFCC注意：史密斯架深蹲手腕承重较小，但仍需注意握杠姿势，保持手腕中立位。' },
                { name: '固定器械：腿举机 (Leg Press Machine)', sets: '3组', reps: '10-15次', notes: '技巧：调整座椅，确保膝盖不超过脚尖。推起重量时感受大腿和臀部发力。固定轨迹，非常安全高效。TFCC注意：此动作不涉及手腕，非常安全。' },
                { name: '史密斯架臀冲 (Smith Machine Glute Bridge/Hip Thrust)', sets: '3组', reps: '10-15次', notes: '技巧：坐在史密斯架下方，杠铃置于髋部，双脚踩实地面。臀部发力向上顶起杠铃，感受臀部强烈收缩。这是孤立臀部的绝佳动作。TFCC注意：杠铃通常用泡沫垫包裹，手握杠铃只是为了稳定，对手腕压力很小。' },
                { name: '固定器械：腿屈伸 (Leg Extension Machine)', sets: '3组', reps: '12-15次', notes: '技巧：调整膝盖对齐器械轴心。小腿向上踢起，感受大腿前侧（股四头肌）收缩。孤立训练大腿前侧。TFCC注意：不涉及手腕。' },
                { name: '自由器械：哑铃锤式弯举 (Dumbbell Hammer Curls)', sets: '3组', reps: '10-15次', notes: '重量建议：起始尝试每只手 2kg-4kg 哑铃。技巧：站立或坐姿，双手各持一哑铃，掌心相对。向上弯举哑铃，感受二头肌和肱肌收缩。TFCC注意：此动作对手腕压力小于杠铃弯举，对TFCC更友好。保持手腕中立。' },
                { name: '固定器械：绳索下压 (Cable Triceps Pushdown)', sets: '3组', reps: '10-15次', notes: '技巧：使用直杆或V形把手，肘部固定在身体两侧，向下压动把手，感受三头肌收缩。TFCC注意：绳索训练对手腕的锁定要求不高，压力相对较小。可选择绳索把手（对TFCC最友好）。' },
                { name: '核心训练：平板支撑 (Plank)', sets: '3组', reps: '30-60秒', notes: '技巧：身体呈一条直线，核心收紧，臀部不要塌陷或过高。TFCC注意：平板支撑用前臂支撑，不对手腕直接施压，非常安全。' }
            ]
        },
        '星期六': {
            title: '休息日：30分钟爬坡',
            goal: '积极恢复',
            exercises: [
                { name: '跑步机爬坡', sets: '30分钟', reps: '坡度15，速度4', notes: '这种低到中等强度的有氧运动，有助于促进血液循环，加速肌肉恢复，同时也能帮助消耗卡路里，并对降低皮质醇有积极作用（前提是不过度）。' }
            ]
        },
        '星期日': {
            title: '完全休息',
            goal: '充分恢复',
            exercises: [
                { name: '无特定训练', sets: '', reps: '', notes: '让身体充分休息和恢复，为下一周的训练做好准备。保证充足睡眠，可以进行轻度活动如散步。' }
            ]
        }
    };

    // 获取北京时间并显示
    function updateDateTime() {
        const now = new Date();
        // 设置为北京时区 (UTC+8)
        const options = {
            timeZone: 'Asia/Shanghai',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            weekday: 'long'
        };
        const formatter = new Intl.DateTimeFormat('zh-CN', options);
        const parts = formatter.formatToParts(now);

        let date = '';
        let time = '';
        let weekday = '';

        for (const part of parts) {
            if (part.type === 'year' || part.type === 'month' || part.type === 'day') {
                date += part.value;
            } else if (part.type === 'hour' || part.type === 'minute' || part.type === 'second' || part.type === 'literal') {
                time += part.value;
            } else if (part.type === 'weekday') {
                weekday = part.value;
            }
        }
        datetimeDisplay.innerHTML = `
            <p><strong>${date} ${time}</strong></p>
            <p>今天是：<strong>${weekday}</strong></p>
        `;

        // 根据星期几显示训练计划
        displayTrainingPlan(weekday);
    }

    function displayTrainingPlan(weekday) {
        let dayKey;
        // 将中文星期转换为内部使用的键名
        switch (weekday) {
            case '星期一': dayKey = '星期一'; break;
            case '星期二': dayKey = '星期二'; break;
            case '星期三': dayKey = '星期三'; break;
            case '星期四': dayKey = '星期四'; break;
            case '星期五': dayKey = '星期五'; break;
            case '星期六': dayKey = '星期六'; break;
            case '星期日': dayKey = '星期日'; break;
            default: dayKey = '星期日'; // 默认显示休息日，以防万一
        }

        const plan = trainingPlans[dayKey];
        if (plan) {
            let htmlContent = `<h3>${plan.title}</h3>`;
            if (plan.goal) {
                htmlContent += `<p><strong>目标：</strong> ${plan.goal}</p>`;
            }
            htmlContent += '<ul>';
            plan.exercises.forEach(exercise => {
                htmlContent += `
                    <li>
                        <strong>${exercise.name}</strong><br>
                        组数与次数：${exercise.sets}，${exercise.reps}<br>
                        ${exercise.notes ? `<small>${exercise.notes}</small>` : ''}
                    </li>
                `;
            });
            htmlContent += '</ul>';
            trainingPlanDisplay.innerHTML = htmlContent;
        } else {
            trainingPlanDisplay.innerHTML = '<p>抱歉，今天没有找到具体的训练计划。</p>';
        }
    }

    // 初始化显示
    updateDateTime();
    // 每秒更新时间，保持“丝滑”体验
    setInterval(updateDateTime, 1000);
});
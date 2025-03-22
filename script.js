// 学生名单
let students = [
    "张三", "李四", "王五", "赵六", "陈七",
    "刘八", "周九", "吴十", "郑十一", "王十二"
];

// 获取按钮和结果显示元素
const pickButton = document.getElementById('pick-button');
const resetButton = document.getElementById('reset-button');
const studentName = document.getElementById('student-name');
const remainingStudents = document.getElementById('remaining-students');

// 更新剩余学生数量
function updateRemainingStudents() {
    remainingStudents.textContent = students.length;
}

// 点击按钮时触发随机点名
pickButton.addEventListener('click', () => {
    if (students.length === 0) {
        studentName.textContent = "没有学生可点名！";
        return;
    }

    // 随机选择一个学生
    const randomIndex = Math.floor(Math.random() * students.length);
    const pickedStudent = students[randomIndex];

    // 显示被点名的学生
    studentName.textContent = pickedStudent;

    // 从名单中移除已被点名的学生
    students.splice(randomIndex, 1);

    // 更新剩余学生数量
    updateRemainingStudents();
});

// 点击重置按钮时恢复学生名单
resetButton.addEventListener('click', () => {
    students = [
        "张三", "李四", "王五", "赵六", "陈七",
        "刘八", "周九", "吴十", "郑十一", "王十二"
    ];
    studentName.textContent = "无";
    updateRemainingStudents();
});

// 初始化剩余学生数量
updateRemainingStudents();

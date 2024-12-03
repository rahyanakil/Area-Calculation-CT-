function calculate(id) {
    const btn = document.getElementById(id);
    console.log(btn);

    let taskName = btn.getAttribute('id')
    const in1 = document.getElementById(taskName + 'In1');
    const in2 = document.getElementById(taskName + 'In2');
    let v1 = parseFloat(in1.value);
    let v2 = parseFloat(in2.value);
    if (taskName === "Triangle" || taskName === "Rhombus") {
        let result = calFunc1(v1, v2);
        showResult(taskName, result)
    }
}

function calFunc1(v1, v2) {
    return 0.5 * v1 * v2
}

function showResult(t, r) {
    const ol = document.getElementById('oList');
    const li = document.createElement("li");
    li.innerHTML = `${t}= ${r}cm<sup>2</sup>`
    ol.appendChild(li);
}
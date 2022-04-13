//model input form open close option
let modelbtn = document.querySelector("#openModel");
let modelCloseBtn = document.querySelector("#closeModel");
let model = document.querySelector("#myModel");
let submitbtn = document.querySelector(".submit-btn");

modelbtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("new modal");
    model.style.display = "block";
})

modelCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    model.style.display = "none";
    clearForm();
})

submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    model.style.display = "none";
})

// staticCard(data);AQQ

let dashboard = document.querySelector(".dashboard");
// data store array 
let inital = [{
        title: "Marvel",
        dis: "Datacenter Overview",
        vm: "and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .",
        p1: 30,
        p2: 10,
        p3: 60,
        c1content: 'Datacenter Overview',
        c2content: 'Datacenter formatting',
        c3content: 'HTML pages',
        chartType: 'pie',
        id: 1,
    },
    {
        title: "Studio production Network",
        dis: "Requests Overview.",
        vm: "CSS is designed primarily to enable the separation of document content from document presentation, including aspects such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility",
        p1: 30,
        p2: 10,
        p3: 60,
        c1content: 'Datacenter Overview',
        c2content: 'Datacenter formatting',
        c3content: 'HTML pages',
        chartType: 'pie',
        id: 2,
    },
    {
        title: "TC TITLE",
        dis: "Datacenter Overview",
        vm: "and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .",
        p1: 30,
        p2: 10,
        p3: 60,
        c1content: 'Datacenter Overview',
        c2content: 'Datacenter formatting',
        c3content: 'HTML pages',
        chartType: 'pie',
        id: 3,
    },
    {
        title: "TCC TITLE",
        dis: "Datacenter Overview",
        vm: "and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .",
        p1: 30,
        p2: 10,
        p3: 60,
        c1content: 'Datacenter Overview',
        c2content: 'Datacenter formatting',
        c3content: 'HTML pages',
        chartType: 'pie',
        id: 4,
    },
    {
        title: "TCC TITLE",
        dis: "Datacenter Overview",
        vm: "and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .",
        p1: 30,
        p2: 10,
        p3: 60,
        c1content: 'Datacenter Overview',
        c2content: 'Datacenter formatting',
        c3content: 'HTML pages',
        chartType: 'pie',
        id: 5,
    },
    {
        title: "T2 TITLE",
        dis: "Datacenter Overview",
        vm: "and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .",
        p1: 30,
        p2: 10,
        p3: 60,
        c1content: 'Datacenter Overview',
        c2content: 'Datacenter formatting',
        c3content: 'HTML pages',
        chartType: 'pie',
        id: 6,
    }
];
// once open the tab the inital datas to be render
createCard(inital);

let datas = {}
    // from values to asign a variable
let title1 = document.getElementById("form-title");
let dis1 = document.getElementById("form-dis");
let vm1 = document.getElementById("form-content");
let p11 = document.getElementById("form-chart1");
let p21 = document.getElementById("form-chart2");
let p31 = document.getElementById("form-chart3");
let c1content1 = document.getElementById("form-chart-name1");
let c2content1 = document.getElementById("form-chart-name2");
let c3content1 = document.getElementById("form-chart-name3");
let chartType1 = document.getElementById("chart-type");
// clearForm function for one submit button will be clecked then the function is executed for the form input feilds to clear values
function clearForm() {;
    title1.value = null;
    dis1.value = null;
    vm1.value = null;
    p11.value = null;
    p21.value = null;
    p31.value = null;
    c1content1.value = null;
    c2content1.value = null;
    c3content1.value = null;
    chartType1.value = null;
}

//get input value
function getInputValue(type, id = null) {
    datas.title = title1.value;
    datas.dis = dis1.value;
    datas.vm = vm1.value;
    datas.p1 = p11.value;
    datas.p2 = p21.value;
    datas.p3 = p31.value;
    datas.c1content = c1content1.value;
    datas.c2content = c2content1.value;
    datas.c3content = c3content1.value;
    datas.chartType = chartType1.value;

    if (type === 'new') {
        dashboard.innerHTML = "";
        datas.id = new Date().getTime();
        inital = [...inital, datas];
        createCard(inital);
    } else {
        dashboard.innerHTML = "";
        // editCard(id, datas);
        inital = inital.map((item) => {
            if (item.id === id) {
                item.title = title1.value;
                item.dis = dis1.value;
                item.vm = vm1.value;
                item.p1 = p11.value;
                item.p2 = p21.value;
                item.p3 = p31.value;
                item.c1content = c1content1.value;
                item.c2content = c2content1.value;
                item.c3content = c3content1.value;
                item.chartType = chartType1.value;
            }
            return item;
        })
        createCard(inital);
    }
    clearForm();
}

let submit = document.querySelector(".submit-btn");
submit.addEventListener("click", () => {
    getInputValue('new')
});
// submit.addEventListener("click", () => { getInputValue('new') });

function createCard(data) {
    let dashboard = document.querySelector(".dashboard");
    data.forEach((item) => {
        //card div create
        const card = document.createElement("div");
        card.setAttribute("id", "item.id")
        card.classList.add("card");
        //destr array
        const { title, dis, p1, p2, p3, c1content, c2content, c3content, chartType, vm, id } = item;
        //title create
        function createTitle(title) {
            let card_title = document.createElement("h3");
            card_title.innerText = title;
            card_title.classList.add("card-tit");
            return card_title;
        }
        let card_title = createTitle(title);

        //paragraph create
        function createPara(dis) {
            let card_para = document.createElement("p");
            card_para.innerText = dis;
            card_para.classList.add("card-p");
            return card_para;
        }
        let card_para = createPara(dis);

        //chart create
        function createChart(p1, p2, p3, chartType, c1content, c2content, c3content) {
            //chart create
            let divs = document.createElement("div");
            divs.classList.add("hi");
            let can = document.createElement("canvas");
            can.classList.add("canvass");
            let piechartCanvasid = new Date().getTime().toString() + '2';
            can.id = piechartCanvasid;
            divs.appendChild(can);

            const data = {
                labels: [c1content, c2content, c3content],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: ['#b2dfdc', '#4bb5b0 ', '#3f82b8'],
                    borderColor: 'black',
                    data: [p1, p2, p3], //split percent values
                    hoverOffset: 4
                }]
            };
            const config = { type: chartType, data: data }
            setTimeout(() => {
                const ctx = document.getElementById(piechartCanvasid)
                const myChart = new Chart(ctx, config);
            }, 500)
            return divs;
        }
        let create_Chart = createChart(p1, p2, p3, chartType, c1content, c2content, c3content);

        //view more part
        function createVm(vm) {
            let card_vm = document.createElement("p");
            card_vm.innerText = vm;
            card_vm.classList.add("card-vm");
            return card_vm;
        }
        let card_vm = createVm(vm);

        //edit button
        function editButton() {
            //edit button create
            let editbtn = document.createElement("button");
            editbtn.innerHTML = "Edit";
            editbtn.classList.add("edit-btn");
            editbtn.setAttribute("id", "onModel");
            // once edit button clicked
            editbtn.addEventListener("click", () => {
                submit.style.display = "none";
                console.log("edit modal");
                let edit_model = document.querySelector(".sub_btn");
                edit_model.innerHTML = ''
                let edit_submit = document.createElement("button");
                edit_submit.innerHTML = "submit";
                edit_submit.classList.add("editButton")
                model.style.display = "block";
                // edit from input values for display purpose
                title1.value = title;
                dis1.value = dis;
                vm1.value = vm;
                p11.value = p1;
                p21.value = p2;
                p31.value = p3;
                c1content1.value = c1content;
                c2content1.value = c2content;
                c3content1.value = c3content;
                chartType1.value = chartType;
                edit_model.appendChild(edit_submit);
                model.appendChild(edit_model)
                edit_submit.addEventListener("click", () => {
                    getInputValue('edit', id);
                    model.style.display = "none";
                    edit_submit.style.display = 'none';
                    submitbtn.style.display = 'block';
                })
            })
            return editbtn;
        }
        let edit_button = editButton();

        function deleteButton() {
            // console.log(id);
            let deletebtn = document.createElement("button");
            deletebtn.innerHTML = "Delete";
            deletebtn.classList.add("edit-btn");

            deletebtn.addEventListener("click", () => {
                //access the main div
                let target = document.getElementById("delete-model");
                target.innerHTML = null;
                target.style.display = "block";

                // create delete button
                let del_model_btn = document.createElement("button");
                del_model_btn.classList.add("edit-btn");
                del_model_btn.innerHTML = "Yes";

                // create model close button
                let cancel_model_btn = document.createElement("button");
                cancel_model_btn.classList.add("edit-btn");
                cancel_model_btn.innerHTML = "No";

                //create h3
                let deleteModelh3 = document.createElement("h3");
                deleteModelh3.classList.add("del-h3");
                deleteModelh3.innerHTML = "title : " + title;

                //create p
                let deleteModelp = document.createElement("p");
                deleteModelp.classList.add("del-p")
                deleteModelp.innerHTML = "Discription : " + dis;

                // comment
                let delete_alert = document.createElement("p");
                delete_alert.classList.add("del-alert")
                delete_alert.innerHTML = 'Do you really want to delete this card?';

                target.append(delete_alert, deleteModelh3, deleteModelp, del_model_btn, cancel_model_btn);

                delete_button.addEventListener('click', () => {
                        //startion delete model is display none
                        target.style.display = "block";
                    })
                    // card.remove();
                del_model_btn.addEventListener("click", () => {
                        card.remove();
                        target.style.display = "none";
                    })
                    // card.cancel();
                cancel_model_btn.addEventListener("click", () => {
                    target.style.display = "none";
                })
            })
            return deletebtn;
        }
        let delete_button = deleteButton();

        //append all title,paragraph,view more, chart
        card.append(card_title, card_para, card_vm, create_Chart, edit_button, delete_button);
        // now our card append into html dashboard id
        dashboard.appendChild(card);
    })
}
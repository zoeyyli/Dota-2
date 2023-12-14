
const w = 700;
const h = 500;
const margin = {top: 25, right: 60, bottom: 25,
  left: 60};
const innerWidth = w - margin.left - margin.right;
const innerHeight = h - margin.top - margin.bottom;

const svg = d3.select("div#plot")
.append("svg")
.attr("width", w)
.attr("height", h);


const bardata = [0.7777778, 0.7272727, 0.6774194, 0.6666667, 0.6562500, 0.3513514, 0.3333333, 0.3235294, 0.2777778, 0.2258065];

const bardata_2 = [0.7631579, 0.7560976, 0.7446809, 0.7400000, 0.7352941, 0.2777778, 0.2727273, 0.2592593, 0.2553191, 0.2333333];


d3.select('input[name="dota_1"]')
  .on("click", function(event) {
    document.getElementById('result').innerHTML = "Hooray! Let's play more with the game!";
    var btn = document.querySelector('input[name="dota_2"]');
    btn.disabled = true;
    });

d3.select('input[name="dota_2"]')
  .on("click", function(event) {
    document.getElementById('result').innerHTML = "No Worries! Start interacting with the game!";
    var btn = document.querySelector('input[name="dota_1"]');
    btn.disabled = true;
    });

d3.select('input[id="A"]')
  .on("click", function(event) {
    svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.7777778) ? "red" : "blue")

    svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg.append("text")
        .attr("x", 300)
        .attr("y", 50)
        .text("You select a great ability! Go try other abilities!");
    });


d3.select('input[id="B"]')
  .on("click", function(event) {
    svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.7272727) ? "red" : "blue")

    svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg.append("text")
        .attr("x", 300)
        .attr("y", 50)
        .text("You select a great ability! Go try other abilities!");
    });

d3.select('input[id="C"]')
  .on("click", function(event) {
    svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.6774194) ? "red" : "blue")

    svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg.append("text")
        .attr("x", 300)
        .attr("y", 50)
        .text("You select a great ability! Go try other abilities!");
    });

d3.select('input[id="D"]')
  .on("click", function(event) {
    svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.6666667) ? "red" : "blue")

    svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg.append("text")
        .attr("x", 300)
        .attr("y", 50)
        .text("You select a great ability! Go try other abilities!");
    });

d3.select('input[id="E"]')
  .on("click", function(event) {
    svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.6562500) ? "red" : "blue")

    svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg.append("text")
        .attr("x", 300)
        .attr("y", 50)
        .text("You select a great ability! Go try other abilities!");
    });

d3.select('input[id="F"]')
  .on("click", function(event) {
    svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.3513514) ? "red" : "blue")

    svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg.append("text")
        .attr("x", 300)
        .attr("y", 50)
        .text("Oh this is a bad ability! Choose another one!");
    });

d3.select('input[id="G"]')
  .on("click", function(event) {
    svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.3333333) ? "red" : "blue")

    svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg.append("text")
        .attr("x", 300)
        .attr("y", 50)
        .text("Oh this is a bad ability! Choose another one!");
    });

d3.select('input[id="H"]')
  .on("click", function(event) {
    svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.3235294) ? "red" : "blue")

    svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg.append("text")
        .attr("x", 300)
        .attr("y", 50)
        .text("Oh this is a bad ability! Choose another one!");
    });

d3.select('input[id="I"]')
  .on("click", function(event) {
    svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.2777778) ? "red" : "blue")

    svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg.append("text")
        .attr("x", 300)
        .attr("y", 50)
        .text("Oh this is a bad ability! Choose another one!");
    });

d3.select('input[id="J"]')
  .on("click", function(event) {
    svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.2258065) ? "red" : "blue")

    svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg.append("text")
        .attr("x", 300)
        .attr("y", 50)
        .text("Oh this is a bad ability! Choose another one!");
    });


const svg_2 = d3.select("div#plot_2")
.append("svg")
.attr("width", w)
.attr("height", h);

d3.select('input[id="1"]')
  .on("click", function(event) {
    svg_2.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata_2.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata_2)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg_2.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata_2);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.7631579) ? "red" : "blue")

    svg_2.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg_2.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg_2.append("text")
        .attr("x", 360)
        .attr("y", 100)
        .text("You select a great hero! Go try other heroes!");
    });

d3.select('input[id="2"]')
  .on("click", function(event) {
    svg_2.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata_2.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata_2)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg_2.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata_2);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.7560976) ? "red" : "blue")

    svg_2.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg_2.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg_2.append("text")
        .attr("x", 360)
        .attr("y", 100)
        .text("You select a great hero! Go try other heroes!");
    });

d3.select('input[id="3"]')
  .on("click", function(event) {
    svg_2.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata_2.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata_2)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg_2.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata_2);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.7446809) ? "red" : "blue")

    svg_2.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg_2.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg_2.append("text")
        .attr("x", 360)
        .attr("y", 100)
        .text("You select a great hero! Go try other heroes!");
    });

d3.select('input[id="4"]')
  .on("click", function(event) {
    svg_2.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata_2.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata_2)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg_2.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata_2);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.7400000) ? "red" : "blue")

    svg_2.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg_2.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg_2.append("text")
        .attr("x", 360)
        .attr("y", 100)
        .text("You select a great hero! Go try other heroes!");
    });

d3.select('input[id="5"]')
  .on("click", function(event) {
    svg_2.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata_2.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata_2)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg_2.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata_2);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.7352941) ? "red" : "blue")

    svg_2.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg_2.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg_2.append("text")
        .attr("x", 360)
        .attr("y", 100)
        .text("You select a great hero! Go try other heroes!");
    });

d3.select('input[id="6"]')
  .on("click", function(event) {
    svg_2.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata_2.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata_2)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg_2.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata_2);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.2777778) ? "red" : "blue")

    svg_2.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg_2.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg_2.append("text")
        .attr("x", 360)
        .attr("y", 100)
        .text("Oh this is a bad hero! Choose another one!");
    });

d3.select('input[id="7"]')
  .on("click", function(event) {
    svg_2.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata_2.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata_2)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg_2.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata_2);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.2727273) ? "red" : "blue")

    svg_2.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg_2.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg_2.append("text")
        .attr("x", 360)
        .attr("y", 100)
        .text("Oh this is a bad hero! Choose another one!");
    });

d3.select('input[id="8"]')
  .on("click", function(event) {
    svg_2.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata_2.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata_2)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg_2.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata_2);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.2592593) ? "red" : "blue")

    svg_2.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg_2.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg_2.append("text")
        .attr("x", 360)
        .attr("y", 100)
        .text("Oh this is a bad hero! Choose another one!");
    });

d3.select('input[id="9"]')
  .on("click", function(event) {
    svg_2.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata_2.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata_2)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg_2.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata_2);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.2553191) ? "red" : "blue")

    svg_2.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg_2.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg_2.append("text")
        .attr("x", 360)
        .attr("y", 100)
        .text("Oh this is a bad hero! Choose another one!");
    });

d3.select('input[id="10"]')
  .on("click", function(event) {
    svg_2.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

    const xScale = d3.scaleBand()
    .domain(d3.range(bardata_2.length))
    .range([0, innerWidth])
    .paddingInner(.1);

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata_2)])
    .range([innerHeight, 0])

    const xAxis = d3.axisBottom()
    .scale(xScale);

    const yAxis = d3.axisLeft()
    .scale(yScale);

    const bars = svg_2.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bardata_2);

    bars.enter().append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", d => (d == 0.2333333) ? "red" : "blue")

    svg_2.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

    svg_2.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

    svg_2.append("text")
        .attr("x", 360)
        .attr("y", 100)
        .text("Oh this is a bad hero! Choose another one!");
    });


const svg_3 = d3.select("div#plot_3")
.append("svg")
.attr("width", w)
.attr("height", h);

const bar_1 = [6.055000, 5.916667, 5.083333, 17.722222]
d3.select('input[id="Q"]')
  .on("click", function(event) {
    svg_3.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

     // Define scales and axes for the horizontal bar chart
  const yScale = d3.scaleBand()
    .domain(d3.range(bar_1.length))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(bar_2)])
    .range([0, innerWidth]);

  const yAxis = d3.axisLeft().scale(yScale);
  const xAxis = d3.axisBottom().scale(xScale);

  const bars = svg_3.append("g")
    .attr("id", "plot")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bar_1);

  bars.enter().append("rect")
    .attr("y", (d, i) => yScale(i))
    .attr("x", 0)  // Horizontal position starts from 0
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d))
    .attr("fill", d => "blue");

  svg_3.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  svg_3.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 90)
    .text("kda");

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 210)
    .text("kills");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 330)
    .text("death");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 440)
    .text("assist");
});

const bar_2 = [4.723548, 8.064516, 6.451613, 16.354839]
d3.select('input[id="R"]')
  .on("click", function(event) {
    svg_3.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

     // Define scales and axes for the horizontal bar chart
  const yScale = d3.scaleBand()
    .domain(d3.range(bar_2.length))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(bar_2)])
    .range([0, innerWidth]);

  const yAxis = d3.axisLeft().scale(yScale);
  const xAxis = d3.axisBottom().scale(xScale);

  const bars = svg_3.append("g")
    .attr("id", "plot")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bar_2);

  bars.enter().append("rect")
    .attr("y", (d, i) => yScale(i))
    .attr("x", 0)  // Horizontal position starts from 0
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d))
    .attr("fill", d => "blue");

  svg_3.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  svg_3.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 90)
    .text("kda");

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 210)
    .text("kills");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 330)
    .text("death");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 440)
    .text("assist");
});

const bar_3 = [2.560541, 7.432432, 7.648649, 9.540541]
d3.select('input[id="S"]')
  .on("click", function(event) {
    svg_3.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

     // Define scales and axes for the horizontal bar chart
  const yScale = d3.scaleBand()
    .domain(d3.range(bar_3.length))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(bar_3)])
    .range([0, innerWidth]);

  const yAxis = d3.axisLeft().scale(yScale);
  const xAxis = d3.axisBottom().scale(xScale);

  const bars = svg_3.append("g")
    .attr("id", "plot")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bar_3);

  bars.enter().append("rect")
    .attr("y", (d, i) => yScale(i))
    .attr("x", 0)  // Horizontal position starts from 0
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d))
    .attr("fill", d => "blue");

  svg_3.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  svg_3.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 90)
    .text("kda");

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 210)
    .text("kills");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 330)
    .text("death");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 440)
    .text("assist");
});

const bar_4 = [3.880000, 6.212121, 7.030303, 13.060606]
d3.select('input[id="T"]')
  .on("click", function(event) {
    svg_3.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

     // Define scales and axes for the horizontal bar chart
  const yScale = d3.scaleBand()
    .domain(d3.range(bar_4.length))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(bar_4)])
    .range([0, innerWidth]);

  const yAxis = d3.axisLeft().scale(yScale);
  const xAxis = d3.axisBottom().scale(xScale);

  const bars = svg_3.append("g")
    .attr("id", "plot")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bar_4);

  bars.enter().append("rect")
    .attr("y", (d, i) => yScale(i))
    .attr("x", 0)  // Horizontal position starts from 0
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d))
    .attr("fill", d => "blue");

  svg_3.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  svg_3.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 90)
    .text("kda");

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 210)
    .text("kills");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 330)
    .text("death");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 440)
    .text("assist");
});

const bar_5 = [2.739412, 5.970588, 7.029412, 12.411765]
d3.select('input[id="U"]')
  .on("click", function(event) {
    svg_3.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

     // Define scales and axes for the horizontal bar chart
  const yScale = d3.scaleBand()
    .domain(d3.range(bar_5.length))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(bar_5)])
    .range([0, innerWidth]);

  const yAxis = d3.axisLeft().scale(yScale);
  const xAxis = d3.axisBottom().scale(xScale);

  const bars = svg_3.append("g")
    .attr("id", "plot")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bar_5);

  bars.enter().append("rect")
    .attr("y", (d, i) => yScale(i))
    .attr("x", 0)  // Horizontal position starts from 0
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d))
    .attr("fill", d => "blue");

  svg_3.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  svg_3.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 90)
    .text("kda");

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 210)
    .text("kills");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 330)
    .text("death");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 440)
    .text("assist");
});

const bar_6 = [3.321111, 8.166667, 7.750000, 15.472222]
d3.select('input[id="V"]')
  .on("click", function(event) {
    svg_3.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

     // Define scales and axes for the horizontal bar chart
  const yScale = d3.scaleBand()
    .domain(d3.range(bar_6.length))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(bar_6)])
    .range([0, innerWidth]);

  const yAxis = d3.axisLeft().scale(yScale);
  const xAxis = d3.axisBottom().scale(xScale);

  const bars = svg_3.append("g")
    .attr("id", "plot")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bar_6);

  bars.enter().append("rect")
    .attr("y", (d, i) => yScale(i))
    .attr("x", 0)  // Horizontal position starts from 0
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d))
    .attr("fill", d => "blue");

  svg_3.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  svg_3.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 90)
    .text("kda");

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 210)
    .text("kills");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 330)
    .text("death");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 440)
    .text("assist");
});

const bar_7 = [5.755625, 10.156250, 5.312500, 13.468750]
d3.select('input[id="W"]')
  .on("click", function(event) {
    svg_3.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

     // Define scales and axes for the horizontal bar chart
  const yScale = d3.scaleBand()
    .domain(d3.range(bar_7.length))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(bar_7)])
    .range([0, innerWidth]);

  const yAxis = d3.axisLeft().scale(yScale);
  const xAxis = d3.axisBottom().scale(xScale);

  const bars = svg_3.append("g")
    .attr("id", "plot")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bar_7);

  bars.enter().append("rect")
    .attr("y", (d, i) => yScale(i))
    .attr("x", 0)  // Horizontal position starts from 0
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d))
    .attr("fill", d => "blue");

  svg_3.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  svg_3.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 90)
    .text("kda");

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 210)
    .text("kills");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 330)
    .text("death");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 440)
    .text("assist");
});

const bar_8 = [3.302500, 5.750000, 6.694444, 11.972222]
d3.select('input[id="X"]')
  .on("click", function(event) {
    svg_3.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

     // Define scales and axes for the horizontal bar chart
  const yScale = d3.scaleBand()
    .domain(d3.range(bar_8.length))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(bar_8)])
    .range([0, innerWidth]);

  const yAxis = d3.axisLeft().scale(yScale);
  const xAxis = d3.axisBottom().scale(xScale);

  const bars = svg_3.append("g")
    .attr("id", "plot")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bar_8);

  bars.enter().append("rect")
    .attr("y", (d, i) => yScale(i))
    .attr("x", 0)  // Horizontal position starts from 0
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d))
    .attr("fill", d => "blue");

  svg_3.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  svg_3.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 90)
    .text("kda");

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 210)
    .text("kills");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 330)
    .text("death");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 440)
    .text("assist");
});

const bar_9 = [2.837097, 6.064516, 6.612903, 9.645161]
d3.select('input[id="Y"]')
  .on("click", function(event) {
    svg_3.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

     // Define scales and axes for the horizontal bar chart
  const yScale = d3.scaleBand()
    .domain(d3.range(bar_9.length))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(bar_9)])
    .range([0, innerWidth]);

  const yAxis = d3.axisLeft().scale(yScale);
  const xAxis = d3.axisBottom().scale(xScale);

  const bars = svg_3.append("g")
    .attr("id", "plot")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bar_9);

  bars.enter().append("rect")
    .attr("y", (d, i) => yScale(i))
    .attr("x", 0)  // Horizontal position starts from 0
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d))
    .attr("fill", d => "blue");

  svg_3.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  svg_3.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 90)
    .text("kda");

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 210)
    .text("kills");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 330)
    .text("death");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 440)
    .text("assist");
});

const bar_10 = [5.070303, 10.939394, 5.727273, 12.666667]
d3.select('input[id="Z"]')
  .on("click", function(event) {
    svg_3.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

     // Define scales and axes for the horizontal bar chart
  const yScale = d3.scaleBand()
    .domain(d3.range(bar_10.length))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(bar_10)])
    .range([0, innerWidth]);

  const yAxis = d3.axisLeft().scale(yScale);
  const xAxis = d3.axisBottom().scale(xScale);

  const bars = svg_3.append("g")
    .attr("id", "plot")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .selectAll("rect")
    .data(bar_10);

  bars.enter().append("rect")
    .attr("y", (d, i) => yScale(i))
    .attr("x", 0)  // Horizontal position starts from 0
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d))
    .attr("fill", d => "blue");

  svg_3.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  svg_3.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 90)
    .text("kda");

  svg_3.append("text")
    .attr("x", 7)
    .attr("y", 210)
    .text("kills");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 330)
    .text("death");

  svg_3.append("text")
    .attr("x", 5)
    .attr("y", 440)
    .text("assist");

});

// add your JavaScript/D3 to this file

const w = 800;
const h = 600;
const margin = {top: 25, right: 0, bottom: 25,
    left: 100};
const innerWidth = w - margin.left - margin.right;
const innerHeight = h - margin.top - margin.bottom;

const svg = d3.select("div#plot")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "lightgray");

const bardata = [300, 100, 150, 220, 70, 270];

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
    .attr("fill", "green");

svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

// General Update Pattern

function update(data) {

  xScale.domain(d3.range(data.length));

  yScale.domain([0, d3.max(data)]);

  const bars = svg.select("#plot")
      .selectAll("rect")
      .data(data);

  bars.enter().append("rect")
    .merge(bars)
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d))
    .attr("fill", "green");

  bars.exit().remove();

  svg.select(".xAxis")
      .call(xAxis);

  svg.select(".yAxis")
      .call(yAxis);

}


  function add() {
    var newvalue = Math.floor(Math.random()*400);
    bardata.push(newvalue);
    update(bardata);
  }

  function remove() {
    bardata.pop();
    update(bardata);
    };

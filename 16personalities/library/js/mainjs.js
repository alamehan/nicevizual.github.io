//---------- Auto Popup Modal

$('#exampleModal').modal({
  show: true
})

//---------- Library: Plotly

Plotly.d3.csv('https://raw.githubusercontent.com/eksplorasi/eksplorasi.github.io/master/16personalities/dataset/personalitiestreemap.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key]
    });
  }

  var data = [{
    type: "treemap",
    maxdepth: 2,

    ids: unpack(rows, 'ids'),
    values: unpack(rows, 'values'),
    text: unpack(rows, 'text'),
    labels: unpack(rows, 'labels'),
    parents: unpack(rows, 'parents'),

    textposition: "middle center",
    hoverinfo: "none",
    hovertext: "",

    insidetextfont: {
      color: '#FFFFFF'
    },
    pathbar: {
      visible: true,
      edgeshape: "|"
    },
    tiling: {
      // Layout : "squarify" | "binary" | "dice" | "slice" | "slice-dice" | "dice-slice"
      packing: "dice-slice",
      pad: 0
    }
  }];

  // Size Layout Mobile-First
  var layout = {
    autosize: true, //Kalo false, akan tampil berantakan (apa adanya)
    width: 380,
    // height: 600,
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 32
    },
    font: {
      family: 'Roboto Condensed, sans-serif',
      size: 19,
    },
    colorway: ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#19d3f3",
      "#e763fa", "#FECB52", "#FFA15A", "#FF6692", "#B6E880"
    ],
    paper_bgcolor: '#101117',
  }

  var config = {
    responsive: true
  }

  Plotly.newPlot('myDiv', data, layout, config);
})
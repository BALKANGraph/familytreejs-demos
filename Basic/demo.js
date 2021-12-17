var chart = new OrgChart(document.getElementById("tree"), {
    nodeBinding: {
        field_0: "name"
    },
    nodes: [
        { id: 1, name: "Denny Curtis" },
        { id: 2, pid: 1, name: "Ashley Barnett" },
        { id: 3, pid: 1, name: "Caden Ellison" },
        { id: 4, pid: 2, name: "Elliot Patel" },
        { id: 5, pid: 2, name: "Lynn Hussain" },
        { id: 6, pid: 3, name: "Tanner May" },
        { id: 7, pid: 3, name: "Fran Parsons" }
    ]
});
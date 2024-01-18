function Calculate() {
    var area = Number(document.getElementById("LengthInput").value)*Number(document.getElementById("LengthInput").value);
    Number(document.getElementById("AreaAnswer").innerHTML = area);
var perimeter = Number(document.getElementById("LengthInput").value)*4;
Number(document.getElementById("PerimeterAnswer").innerHTML = perimeter);
}

function CalculateRectiangle() {
var areaRectiangle = Number(document.getElementById("WidthInputRectiangle").value)*Number(document.getElementById("HeightInputRectiangle").value);
var PerimeterRectiangle =
Number(document.getElementById("WidthInputRectiangle").value)*2+Number(document.getElementById("HeightInputRectiangle").value)*2
Number(document.getElementById("RectiangleAreaAnswer").innerHTML = areaRectiangle);
Number(document.getElementById("RectianglePerimeterAnswer").innerHTML = PerimeterRectiangle);
}
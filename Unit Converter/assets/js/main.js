// Temperature Converter //

function temperatureConverterF(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFarenheit").innerHTML = (valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
    document.getElementById("outputKelvin").innerHTML = ((valNum-32)/3.8)+273.15;
    document.getElementById("outputRankine").innerHTML = (valNum-32) / 4.8;
    var number = parseFloat($(this).val());
  }

function temperatureConverterC(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFarenheit").innerHTML = (valNum*1.8)+32;
    document.getElementById("outputCelsius").innerHTML = (valNum);
    document.getElementById("outputKelvin").innerHTML = (valNum+273.15);
    document.getElementById("outputRankine").innerHTML = (valNum-32) / 4.8;
  }


function temperatureConverterK(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFarenheit").innerHTML = ((valNum-273.15)*1.8)+32;
    document.getElementById("outputCelsius").innerHTML = (valNum-273.15);
    document.getElementById("outputKelvin").innerHTML = (valNum);
    document.getElementById("outputRankine").innerHTML = (valNum-32) / 4.8;
  }


function temperatureConverterR(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFarenheit").innerHTML = (valNum+459.67);
    document.getElementById("outputCelsius").innerHTML = (valNum-491.67)/1.8;
    document.getElementById("outputKelvin").innerHTML = (valNum/1.8);
    document.getElementById("outputRankine").innerHTML = (valNum);
  }

// Measurement Converter //

function inputConverterI(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputInches").innerHTML = (valNum);
    document.getElementById("outputFeet").innerHTML = (valNum/12);
    document.getElementById("outputYard").innerHTML = (valNum/36);
    document.getElementById("outputMiles").innerHTML = (valNum/63360);
    document.getElementById("outputMillimeters").innerHTML = (valNum*25.4);
    document.getElementById("outputCentimeters").innerHTML = (valNum*2.54);
    document.getElementById("outputMeters").innerHTML = (valNum/39.3701);
    document.getElementById("outputKilometers").innerHTML = (valNum/39370.1);
  }

function inputConverterF(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputInches").innerHTML = (valNum*12);
    document.getElementById("outputFeet").innerHTML = (valNum);
    document.getElementById("outputYard").innerHTML = (valNum/3);
    document.getElementById("outputMiles").innerHTML = ((valNum*12)/63360);
    document.getElementById("outputMillimeters").innerHTML = (valNum*25.4)*12;
    document.getElementById("outputCentimeters").innerHTML = (valNum*2.54)*12;
    document.getElementById("outputMeters").innerHTML = ((valNum*12)/39.3701);
    document.getElementById("outputKilometers").innerHTML = ((valNum*12)/39370.1);
  }

function inputConverterY(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputInches").innerHTML = (valNum*36);
    document.getElementById("outputFeet").innerHTML = (valNum*3);
    document.getElementById("outputYard").innerHTML = (valNum);
    document.getElementById("outputMiles").innerHTML = ((valNum*36)/63360);
    document.getElementById("outputMillimeters").innerHTML = (valNum*25.4)*36;
    document.getElementById("outputCentimeters").innerHTML = (valNum*2.54)*36;
    document.getElementById("outputMeters").innerHTML = ((valNum*36)/39.3701);
    document.getElementById("outputKilometers").innerHTML = ((valNum*36)/39370.1);
  }

function inputConverterMiles(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputInches").innerHTML = (valNum*63360);
    document.getElementById("outputFeet").innerHTML = ((valNum*63360)/12);
    document.getElementById("outputYard").innerHTML = ((valNum*63360)/36);
    document.getElementById("outputMiles").innerHTML = (valNum);
    document.getElementById("outputMillimeters").innerHTML = (valNum*25.4)*63360;
    document.getElementById("outputCentimeters").innerHTML = (valNum*2.54)*63360;
    document.getElementById("outputMeters").innerHTML = ((valNum*63360)/39.3701);
    document.getElementById("outputKilometers").innerHTML = ((valNum*63360)/39370.1);
  }

function inputConverterM(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputInches").innerHTML = (valNum/25.4);
    document.getElementById("outputFeet").innerHTML = (valNum/12)/25.4;
    document.getElementById("outputYard").innerHTML = (valNum/36)/25.4;
    document.getElementById("outputMiles").innerHTML = (valNum/63360)/25.4;
    document.getElementById("outputMillimeters").innerHTML = (valNum);
    document.getElementById("outputCentimeters").innerHTML = (valNum*10);
    document.getElementById("outputMeters").innerHTML = (valNum*1000);
    document.getElementById("outputKilometers").innerHTML = (valNum*1000000);
  }

function inputConverterC(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputInches").innerHTML = (valNum/2.54);
    document.getElementById("outputFeet").innerHTML = (valNum/12)/2.54;
    document.getElementById("outputYard").innerHTML = (valNum/36)/2.54;
    document.getElementById("outputMiles").innerHTML = (valNum/63360)/2.54;
    document.getElementById("outputMillimeters").innerHTML = (valNum/10);
    document.getElementById("outputCentimeters").innerHTML = (valNum);
    document.getElementById("outputMeters").innerHTML = (valNum*100);
    document.getElementById("outputKilometers").innerHTML = (valNum*100000);
  }

function inputConverterMeters(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputInches").innerHTML = (valNum/.0254);
    document.getElementById("outputFeet").innerHTML = (valNum/12)/.0254;
    document.getElementById("outputYard").innerHTML = (valNum/36)/.0254;
    document.getElementById("outputMiles").innerHTML = (valNum/63360)/.0254;
    document.getElementById("outputMillimeters").innerHTML = (valNum/1000);
    document.getElementById("outputCentimeters").innerHTML = (valNum/100);
    document.getElementById("outputMeters").innerHTML = (valNum);
    document.getElementById("outputKilometers").innerHTML = (valNum*1000);
  }

function inputConverterK(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputInches").innerHTML = (valNum/.0000254);
    document.getElementById("outputFeet").innerHTML = (valNum/12)/.000024;
    document.getElementById("outputYard").innerHTML = (valNum/36)/.0000254;
    document.getElementById("outputMiles").innerHTML = (valNum/63360)/.0000254;
    document.getElementById("outputMillimeters").innerHTML = (valNum/1000000);
    document.getElementById("outputCentimeters").innerHTML = (valNum/100000);
    document.getElementById("outputMeters").innerHTML = (valNum/1000);
    document.getElementById("outputKilometers").innerHTML = (valNum);
  }

// Weight Converter //

function weightConverteroz(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputOunce").innerHTML = (valNum);
    document.getElementById("outputPound").innerHTML = (valNum/16);
    document.getElementById("outputGram").innerHTML = (valNum*28);
    document.getElementById("outputKilogram").innerHTML = (valNum*35.274);
  }


function weightConverterlb(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputOunce").innerHTML = (valNum/16);
    document.getElementById("outputPound").innerHTML = (valNum);
    document.getElementById("outputGram").innerHTML = (valNum*453.592);
    document.getElementById("outputKilogram").innerHTML = (valNum*2.20462);
  }


function weightConverterg(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputOunce").innerHTML = (valNum/28);
    document.getElementById("outputPound").innerHTML = (valNum/453.592);
    document.getElementById("outputGram").innerHTML = (valNum);
    document.getElementById("outputKilogram").innerHTML = (valNum*1000);
  }


function weightConverterkg(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputOunce").innerHTML = (valNum/35.274);
    document.getElementById("outputPound").innerHTML = (valNum/2.20462);
    document.getElementById("outputGram").innerHTML = (valNum/1000);
    document.getElementById("outputKilogram").innerHTML = (valNum);
  }

// Capacity Converter //

function capConverterG(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputGallon").innerHTML = (valNum);
    document.getElementById("outputLiter").innerHTML = (valNum*3.785411784);
  }


function capConverterL(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputGallon").innerHTML = (valNum/3.785411784);
    document.getElementById("outputLiter").innerHTML = (valNum);
  }
function checkDataType (value) {
    dataType = typeof value;
    console.log(dataType);
    return dataType;
}

checkDataType("Aneta");
checkDataType(1234);
checkDataType("123xn");
checkDataType(false);
checkDataType("");
checkDataType(null);
checkDataType([1,2,3]);
checkDataType();
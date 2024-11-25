function testGreaterOrEqual(val) {
  if (val>=21) {  // Change this line
    return "20 or Over";
  }

  if (val>=10 & val<20) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

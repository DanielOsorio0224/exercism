const arr = [
  "On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\n",
  "On the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\n",
  "On the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n",
  "On the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n",
  "On the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n",
  "On the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n",
  "On the seventh day of Christmas my true love gave to me: seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n",
  "On the eighth day of Christmas my true love gave to me: eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n",
  "On the ninth day of Christmas my true love gave to me: nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n",
  "On the tenth day of Christmas my true love gave to me: ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n",
  "On the eleventh day of Christmas my true love gave to me: eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n",
  "On the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n",
];

export const recite = (dayFrom, dayTo) => {
  if (dayTo !== undefined) {
    let para = "";
    for (let i = dayFrom - 1; i < dayTo; i++) {
      if (i === dayTo - 1) {
        para += arr[i];
      } else {
        para += `${arr[i]}\n`;
      }
    }
    return para;
  }
  return arr[dayFrom - 1];
};

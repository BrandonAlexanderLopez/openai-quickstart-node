// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.createImage({
//   prompt: "A cute baby sea otter",
//   n: 2,
//   size: "1024x1024",
// });


// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "code-davinci-003",
//   prompt: "",
//   temperature: 0.7,
//   max_tokens: 256,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });


import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Object: water bottle
Qualities: clear, plastic, recycle, liquid

Object: calculator
Qualities: digits, buttons, math, calculate

Object: phone
Qualities: screen, digital, wifi, mobile

Object: watch
Qualities: time, hand, gears, counting

Object: c, cpp
Qualities: loop, if, int, string, code, datasctructure, array, vector, sum, addition, subtraction, stackoverflow, geekforgeeks, cpp reference

Object: write code that adds 2 numbers together in cpp, write code that adds 2 numbers together in c++ and print the answer
Qualities:#include <iostream> int main() int x = 5 int y = 6 int z = 0 z = x+y cout << z << endl

Object: write code that sums 2 numbers together in cpp, write code that sums 2 numbers together in c++ and print the answer
Qualities:#include <iostream> int main() int a = 1 int b = 2 int c = 0 c = a+b cout << c << endl

Object: sum 2 numbers in cpp, sum 2 numbers in c++ and print the answer
Qualities:#include <iostream> int main() int i = 4 int j = 8 int k = 0 k = i+j cout << c << endl 

Object: sum 2 variables in cpp, sum 2 variables in c++ and print the answer
Qualities:#include <iostream> int main() int i = 4 int j = 8 int k = 0 k = i+j cout << c << endl 

Object: write code that adds 2 numbers together in c++
Qualities: #include <iostream>int main()int num1, num2, sum;cout << "Enter the first number: ";cin >> num1;	cout << "Enter the second number

Object: variable, variables, numbers
Qualities: x,y,z,a,b,c, x=1,y=2,z=3,a=1,b=2,c=3

Object: sum, add
Qualities: a+b = c, x+y = z, 1+2 = 3





Object: ${capitalizedAnimal}
Qualities:`;
}

# Earth Day Quiz 🌱️ 
<div id="header" align="left">
 <img src="earth.png?raw=true">
</div>

## Celebrating Earth Day 2023 🌍️

### Can you ace this 15 - question quiz? Take it now and find out 😎️
#### The Quiz generates 15 random questions every time so you can test yourself over and over 🥸️

<pre align = "center"> <b> 
<a href="https://dizzydroid.github.io/earth-day-quiz">Take The Quiz!</a> </b>
</pre>

_____________________________

#### Source Code is available in this repo, feel free to make your OWN quiz and share it with us 🤩️

_____________________________

<details>
  <summary>Some Math 🔢 </summary>
  <br>
Suppose you want to go over all the questions (50 questions), if you get ZERO questions repeated it would take you about <b>4 runs</b> to complete it. But that's an extreme case, you will have questions repeated probably.. we could use a formula based on the expected number of runs for a given probability of repetition. This formula is derived from the Wald-Wolfowitz runs test, which is a statistical test for randomness in a sequence of binary outcomes. 

The formula is:

$$N = \frac{(1 - p)p}{\epsilon^2}(\Phi^{-1}(1 + \gamma/2))^2$$

where $N$ is the number of runs, $p$ is the probability of repetition, $\epsilon$ is the desired accuracy, $\gamma$ is the confidence level, and $\Phi^{-1}$ is the inverse cumulative distribution function of the standard normal distribution. 

For example, if you want to approximate the number of runs with 95% confidence and 5% accuracy, and you assume that each question has a 10% chance of being repeated, then the formula gives:

$$N = \frac{(0.9)(0.1)}{(0.05)^2}(\Phi^{-1}(0.975))^2 \approx 34.5$$

 So, you would need about <b>35 runs</b> to cover all the questions with these assumptions.

</details>

_____________________________

<p align="center"> This web-app is part of the <a href = "https://dizzydroid.github.io/blog.html">DizzyBlog</a> © dizzydroid. All rights reserved </p>

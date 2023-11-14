const STEM = require("../strand/STEM");
const ABM = require("../strand/ABM");

const MATH = require("../subjectType/MATH");

const Statistics = {
  associatedSubjectType: MATH.name,
  associatedStrands: [STEM.name, ABM.name],

  name: "Statistics",
  description:
    "Provide students with the tools to analyze and interpret data, make informed decisions, and contribute to research and problem-solving in a wide range of fields. It is an essential subject for students pursuing careers in data analysis, research, business, economics, social sciences, and various scientific disciplines.",
  imagePath: "uploads\\prod\\subject\\18.jpg",

  questions: [
    // question no. 1
    {
      question: "What is statistics?",
      answerKeys: [
        {
          value: "A branch of mathematics",
          correct: true,
        },
        {
          value: "A type of survey",
          correct: false,
        },
        {
          value: "A type of graph",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question: "What is the average of the numbers 10, 20, and 30?",
      answerKeys: [
        {
          value: "10",
          correct: false,
        },
        {
          value: "15",
          correct: false,
        },
        {
          value: "20",
          correct: true,
        },
      ],
    },
    // question no. 3
    {
      question:
        "What is the middle value in a set of data when arranged in ascending order?",
      answerKeys: [
        {
          value: "Mean",
          correct: false,
        },
        {
          value: "Median",
          correct: true,
        },
        {
          value: "Mode",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: "Which measure tells us how much data varies from the mean?",
      answerKeys: [
        {
          value: "Mean",
          correct: false,
        },
        {
          value: "Median",
          correct: false,
        },
        {
          value: "Range",
          correct: true,
        },
      ],
    },
    // question no. 5
    {
      question: 'What does "probability" measure?',
      answerKeys: [
        {
          value: "How likely an event is to occur",
          correct: true,
        },
        {
          value: "The number of events in a dataset",
          correct: false,
        },
        {
          value: "The size of a dataset",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question: "In a coin toss, what is the probability of getting heads?",
      answerKeys: [
        {
          value: "1/6",
          correct: false,
        },
        {
          value: "1/3",
          correct: false,
        },
        {
          value: "1/2",
          correct: true,
        },
      ],
    },
    // question no. 7
    {
      question: "What does a p-value in hypothesis testing indicate?",
      answerKeys: [
        {
          value: "The probability of a correct hypothesis",
          correct: false,
        },
        {
          value: "The probability of making a Type I error",
          correct: true,
        },
        {
          value: "The probability of making a Type II error",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        "What is the term for a data point that is significantly different from the others?",
      answerKeys: [
        {
          value: "Outlier",
          correct: true,
        },
        {
          value: "Mean",
          correct: false,
        },
        {
          value: "Median",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question: "What is the mode in a dataset?",
      answerKeys: [
        {
          value: "The most frequently occurring value",
          correct: true,
        },
        {
          value: "The average value",
          correct: false,
        },
        {
          value: "The middle value",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question: 'What does "ANOVA" stand for in statistics?',
      answerKeys: [
        {
          value: "Analysis of Variance",
          correct: true,
        },
        {
          value: "Analysis of Variables",
          correct: false,
        },
        {
          value: "Analysis of Averages",
          correct: false,
        },
      ],
    },
    // question no. 11
    {
      question:
        "What is the term for the entire group of individuals or items about which you want to draw conclusions?",
      answerKeys: [
        {
          value: "Sample",
          correct: false,
        },
        {
          value: "Mean",
          correct: false,
        },
        {
          value: "Population",
          correct: true,
        },
      ],
    },
    // question no. 12
    {
      question: 'In statistics, what does "SD" typically stand for?',
      answerKeys: [
        {
          value: "Standard Deviation",
          correct: true,
        },
        {
          value: "Super Data",
          correct: false,
        },
        {
          value: "Simple Data",
          correct: false,
        },
      ],
    },
    // question no. 13
    {
      question: "Which of the following is not a measure of central tendency?",
      answerKeys: [
        {
          value: "Mean",
          correct: false,
        },
        {
          value: "Median",
          correct: false,
        },
        {
          value: "Mode",
          correct: false,
        },
        {
          value: "Range",
          correct: true,
        },
      ],
    },
    // question no. 14
    {
      question:
        "What is the probability of drawing a red card from a standard deck of playing cards?",
      answerKeys: [
        {
          value: "1/52",
          correct: false,
        },
        {
          value: "1/13",
          correct: true,
        },
        {
          value: "1/4",
          correct: false,
        },
        {
          value: "1/2",
          correct: false,
        },
      ],
    },
    // question no. 15
    {
      question: 'What does the term "correlation" measure in statistics?',
      answerKeys: [
        {
          value: "The strength of the relationship between two variables",
          correct: true,
        },
        {
          value: "The average of two variables",
          correct: false,
        },
        {
          value: "The variance of two variables",
          correct: false,
        },
        {
          value: "The causation between two variables",
          correct: false,
        },
      ],
    },
    // question no. 16
    {
      question:
        "What is the term for the difference between the highest and lowest values in a data set?",
      answerKeys: [
        {
          value: "Standard Deviation",
          correct: false,
        },
        {
          value: "Variance",
          correct: false,
        },
        {
          value: "Range",
          correct: true,
        },
        {
          value: "Mean",
          correct: false,
        },
      ],
    },
    // question no. 17
    {
      question:
        "What is the probability of rolling a 6 on a fair six-sided die?",
      answerKeys: [
        {
          value: "1/6",
          correct: true,
        },
        {
          value: "1/2",
          correct: false,
        },
        {
          value: "1/3",
          correct: false,
        },
        {
          value: "1/4",
          correct: false,
        },
      ],
    },
    // question no. 18
    {
      question:
        "Which type of sampling involves dividing the population into subgroups and then randomly selecting from each subgroup?",
      answerKeys: [
        {
          value: "Simple random sampling",
          correct: false,
        },
        {
          value: "Stratified sampling",
          correct: true,
        },
        {
          value: "Convenience sampling",
          correct: false,
        },
        {
          value: "Systematic sampling",
          correct: false,
        },
      ],
    },
    // question no. 19
    {
      question:
        "What is the formula for calculating the variance of a data set?",
      answerKeys: [
        {
          value: "∑(x - μ) / N",
          correct: false,
        },
        {
          value: "∑(x - μ)² / (N - 1)",
          correct: true,
        },
        {
          value: "∑(x - μ) / (N + 1)",
          correct: false,
        },
        {
          value: "∑(x - μ)² / N",
          correct: false,
        },
      ],
    },
    // question no. 20
    {
      question:
        "In a normal distribution, what percentage of data falls within one standard deviation of the mean?",
      answerKeys: [
        {
          value: "34.13%",
          correct: false,
        },
        {
          value: "50%",
          correct: false,
        },
        {
          value: "68.26%",
          correct: false,
        },
        {
          value: "95.44%",
          correct: false,
        },
      ],
    },
    // question no. 21
    {
      question:
        "What is the formula for calculating the z-score of a data point?",
      answerKeys: [
        {
          value: "(x - μ) / σ",
          correct: true,
        },
        {
          value: "(x - μ)² / σ",
          correct: false,
        },
        {
          value: "(x + μ) / σ",
          correct: false,
        },
        {
          value: "(x - μ) / (σ + 1)",
          correct: false,
        },
      ],
    },
    // question no. 22
    {
      question:
        "What is the area under the standard normal distribution curve between -1 and 1 standard deviations from the mean?",
      answerKeys: [
        {
          value: "34.13%",
          correct: false,
        },
        {
          value: "50%",
          correct: false,
        },
        {
          value: "68.26%",
          correct: true,
        },
        {
          value: "95.44%",
          correct: false,
        },
      ],
    },
    // question no. 23
    {
      question:
        "In a two-tailed hypothesis test, what does the rejection region consist of?",
      answerKeys: [
        {
          value: "Values that are less than the critical value",
          correct: false,
        },
        {
          value: "Values that are greater than the critical value",
          correct: false,
        },
        {
          value:
            "Values that are both less than and greater than the critical values",
          correct: true,
        },
        {
          value: "Values that are equal to the critical value",
          correct: false,
        },
      ],
    },
    // question no. 24
    {
      question: 'What does "null hypothesis" mean in hypothesis testing?',
      answerKeys: [
        {
          value: "The hypothesis that is always true",
          correct: true,
        },
        {
          value: "The hypothesis being tested",
          correct: false,
        },
        {
          value: "The alternative hypothesis",
          correct: false,
        },
        {
          value: "The inverse of the alternative hypothesis",
          correct: false,
        },
      ],
    },
    // question no. 25
    {
      question: "What is the mode of the following data set: 3, 3, 6, 7, 7, 9?",
      answerKeys: [
        {
          value: "3",
          correct: false,
        },
        {
          value: "6",
          correct: false,
        },
        {
          value: "7",
          correct: true,
        },
        {
          value: "9",
          correct: false,
        },
      ],
    },
    // question no. 26
    {
      question:
        "What is the range of the following data set: 5, 10, 15, 20, 25?",
      answerKeys: [
        {
          value: "10",
          correct: false,
        },
        {
          value: "20",
          correct: false,
        },
        {
          value: "25",
          correct: true,
        },
        {
          value: "30",
          correct: false,
        },
      ],
    },
    // question no. 27
    {
      question:
        "Which type of data can be divided into meaningful subgroups or categories?",
      answerKeys: [
        {
          value: "Continuous data",
          correct: false,
        },
        {
          value: "Discrete data",
          correct: false,
        },
        {
          value: "Qualitative data",
          correct: true,
        },
        {
          value: "Quantitative data",
          correct: false,
        },
      ],
    },
    // question no. 28
    {
      question:
        "What is the formula for calculating the coefficient of variation (CV)?",
      answerKeys: [
        {
          value: "(Standard Deviation / Mean) * 100",
          correct: false,
        },
        {
          value: "(Mean / Standard Deviation) * 100",
          correct: false,
        },
        {
          value: "(Range / Standard Deviation) * 100",
          correct: false,
        },
        {
          value: "(Mean / Range) * 100",
          correct: false,
        },
      ],
    },
    // question no. 29
    {
      question: "What is the interquartile range (IQR)?",
      answerKeys: [
        {
          value: "The range between the first and third quartiles",
          correct: true,
        },
        {
          value: "The range between the minimum and maximum values",
          correct: false,
        },
        {
          value: "The range between the median and the mode",
          correct: false,
        },
        {
          value: "The range between the mean and the median",
          correct: false,
        },
      ],
    },
    // question no. 30
    {
      question:
        "What is the formula for calculating the probability of an event happening when it is mutually exclusive with another event?",
      answerKeys: [
        {
          value: "P(A and B) = P(A) + P(B)",
          correct: false,
        },
        {
          value: "P(A or B) = P(A) + P(B)",
          correct: true,
        },
        {
          value: "P(A and B) = P(A) * P(B)",
          correct: false,
        },
        {
          value: "P(A or B) = P(A) * P(B)",
          correct: false,
        },
      ],
    },
    // question no. 31
    {
      question:
        "What is the term for the entire collection of individuals or items about which information is sought?",
      answerKeys: [
        {
          value: "Sample",
          correct: false,
        },
        {
          value: "Mean",
          correct: false,
        },
        {
          value: "Population",
          correct: true,
        },
      ],
    },
    // question no. 32
    {
      question: "In a data set, what does the mode represent?",
      answerKeys: [
        {
          value: "The most frequent value",
          correct: true,
        },
        {
          value: "The middle value",
          correct: false,
        },
        {
          value: "The average value",
          correct: false,
        },
      ],
    },
    // question no. 33
    {
      question:
        "What is the measure of the spread of data that represents the difference between the third quartile (Q3) and the first quartile (Q1)?",
      answerKeys: [
        {
          value: "Standard Deviation",
          correct: false,
        },
        {
          value: "Range",
          correct: false,
        },
        {
          value: "Interquartile Range (IQR)",
          correct: true,
        },
      ],
    },
    // question no. 34
    {
      question:
        "If two events are independent, what is the probability of both events occurring?",
      answerKeys: [
        {
          value: "P(A and B) = P(A) * P(B)",
          correct: true,
        },
        {
          value: "P(A and B) = P(A) + P(B)",
          correct: false,
        },
        {
          value: "P(A and B) = P(A) / P(B)",
          correct: false,
        },
      ],
    },
    // question no. 35
    {
      question:
        "What type of data is measured on a continuous scale and can take any value within a given range?",
      answerKeys: [
        {
          value: "Categorical data",
          correct: false,
        },
        {
          value: "Qualitative data",
          correct: false,
        },
        {
          value: "Continuous data",
          correct: true,
        },
      ],
    },
    // question no. 36
    {
      question:
        "Which term refers to a prediction or an estimate of an unknown value based on known data?",
      answerKeys: [
        {
          value: "Variance",
          correct: false,
        },
        {
          value: "Median",
          correct: false,
        },
        {
          value: "Regression",
          correct: true,
        },
      ],
    },
    // question no. 37
    {
      question:
        'In a hypothesis test, what does the "alternative hypothesis" propose?',
      answerKeys: [
        {
          value: "The hypothesis that is always true",
          correct: false,
        },
        {
          value: "The hypothesis being tested",
          correct: false,
        },
        {
          value: "A specific statement about a population parameter",
          correct: true,
        },
      ],
    },
    // question no. 38
    {
      question:
        "What is the probability of drawing a black card from a standard deck of playing cards?",
      answerKeys: [
        {
          value: "1/26",
          correct: false,
        },
        {
          value: "1/13",
          correct: true,
        },
        {
          value: "1/2",
          correct: false,
        },
      ],
    },
    // question no. 39
    {
      question: "What is the formula for the median of a data set?",
      answerKeys: [
        {
          value: "(n + 1) / 2",
          correct: true,
        },
        {
          value: "∑x / n",
          correct: false,
        },
        {
          value: "(n - 1) / 2",
          correct: false,
        },
      ],
    },
    // question no. 40
    {
      question:
        'What is the term for a measure of the "center" of a data set, which is the sum of all data values divided by the number of values?',
      answerKeys: [
        {
          value: "Median",
          correct: false,
        },
        {
          value: "Mode",
          correct: false,
        },
        {
          value: "Mean",
          correct: true,
        },
      ],
    },
    // question no. 41
    {
      question:
        "Which type of sampling involves selecting every nth item from a list or sequence?",
      answerKeys: [
        {
          value: "Simple random sampling",
          correct: false,
        },
        {
          value: "Stratified sampling",
          correct: false,
        },
        {
          value: "Systematic sampling",
          correct: true,
        },
      ],
    },
    // question no. 42
    {
      question: 'What does "probability distribution" describe?',
      answerKeys: [
        {
          value: "A list of all possible outcomes in an experiment",
          correct: true,
        },
        {
          value: "The percentage of the population in a sample",
          correct: false,
        },
        {
          value: "The frequency of a single event",
          correct: false,
        },
      ],
    },
    // question no. 43
    {
      question: "What is the formula for calculating the range of a data set?",
      answerKeys: [
        {
          value: "Maximum value - Minimum value",
          correct: true,
        },
        {
          value: "Sum of values / Number of values",
          correct: false,
        },
        {
          value: "Standard Deviation / Mean",
          correct: false,
        },
      ],
    },
    // question no. 44
    {
      question:
        "What is the term for the number of data points that fall within a certain interval in a frequency distribution?",
      answerKeys: [
        {
          value: "Standard Deviation",
          correct: false,
        },
        {
          value: "Frequency",
          correct: true,
        },
        {
          value: "Mode",
          correct: false,
        },
      ],
    },
    // question no. 45
    {
      question:
        "In a two-tailed hypothesis test, what is the significance level typically set at for testing the null hypothesis?",
      answerKeys: [
        {
          value: "0.05",
          correct: true,
        },
        {
          value: "0.50",
          correct: false,
        },
        {
          value: "1.00",
          correct: false,
        },
      ],
    },
    // question no. 46
    {
      question:
        "In a probability distribution, what is the total area under the curve?",
      answerKeys: [
        {
          value: "100%",
          correct: true,
        },
        {
          value: "50%",
          correct: false,
        },
        {
          value: "0%",
          correct: false,
        },
      ],
    },
    // question no. 47
    {
      question: 'What does the term "outlier" refer to in statistics?',
      answerKeys: [
        {
          value:
            "A data point that is significantly different from other data points",
          correct: true,
        },
        {
          value: "The mean of a data set",
          correct: false,
        },
        {
          value: "The median of a data set",
          correct: false,
        },
      ],
    },
    // question no. 48
    {
      question:
        "What is the term for the most frequently occurring value in a data set?",
      answerKeys: [
        {
          value: "Mean",
          correct: false,
        },
        {
          value: "Median",
          correct: false,
        },
        {
          value: "Mode",
          correct: true,
        },
      ],
    },
    // question no. 49
    {
      question: 'What does "ANOVA" stand for in statistics?',
      answerKeys: [
        {
          value: "Analysis of Variance",
          correct: true,
        },
        {
          value: "Analysis of Variables",
          correct: false,
        },
        {
          value: "Analysis of Averages",
          correct: false,
        },
      ],
    },
    // question no. 50
    {
      question:
        "What is the formula for calculating the probability of the union of two independent events?",
      answerKeys: [
        {
          value: "P(A and B) = P(A) * P(B)",
          correct: false,
        },
        {
          value: "P(A or B) = P(A) + P(B)",
          correct: true,
        },
        {
          value: "P(A and B) = P(A) + P(B)",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = Statistics;

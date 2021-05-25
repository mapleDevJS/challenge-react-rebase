import { mockArticles } from "./mocks/mockArticles";

const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * max + min);
};

const emulateRequestDelay = (successRateInPercent, timeoutInMs, result) => {
    const { errorMessage, data } = result;
    const timeout = getRandomInteger(timeoutInMs.min, timeoutInMs.max);
    const isResolved = Math.random() < successRateInPercent / 100;

    return new Promise((resolve, reject) => {
        setTimeout(() => (isResolved ? resolve(data) : reject(new Error(errorMessage))), timeout);
    });
};

export async function fetchData() {
    const response = await emulateRequestDelay(
      100,
      { min: 200, max: 1000 },
      { errorMessage: 'error message', data: mockArticles }
    );

    return response;
  }

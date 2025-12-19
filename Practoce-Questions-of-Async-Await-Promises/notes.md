# 1. You have an API that fetches data about a product. The API returns a Promise. Write a function that fetches the product details and then logs the product name and price.

# 2. You have a function getUserInfo that returns a Promise with user data. Once you get the user, you need to fetch the user's posts using another Promise-based function.

```
const getUserInfo = async () => {
  return new Promise((resolve, reject) => {
    fetch("user/api")
      .then((res) => resolve(10))
      .catch((error) => {
        console.log({ error });
      });
  });
};

const getUserPosts = async (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`posts/${userId}`)
      .then((res) => resolve("3 posts"))
      .catch((error) => {
        reject("error while ftcing posts");
      });
  });
};

getUserInfo().then((res) => {
  getUserPosts(res).then((posts) => {
    console.log({ posts });
  });
});

```

# 3. You need to implement a function that handles a series of API calls. You have the following requirements:

The first API call fetches a user's profile information (getUserProfile).

The second API call fetches a user's orders (getUserOrders) based on the user profile.

The third API call fetches the details of the latest order (getOrderDetails) based on the latest order ID.

You must:

Fetch the user's profile first.

Once the profile is fetched, use the user's ID to fetch their orders.

Once the orders are fetched, fetch the details of the latest order.

After all the calls, log:

The user's name from the profile.

The total number of orders.

The details of the latest order.

```
const getUserProfile = () => {
  return new Promise((resolve, reject) => {
    fetch("user/api")
      .then((res) => resolve("nagaraj")) // Simulating user name
      .catch((error) => reject("Error fetching user profile"));
  });
};

const getUserOrders = (userId) => {
  return new Promise((resolve, reject) => {
    fetch("user/orders")
      .then((res) => resolve("4 orders")) // Simulating 4 orders
      .catch((error) => reject("Error fetching orders"));
  });
};

const getOrderDetails = (orders) => {
  return new Promise((resolve, reject) => {
    fetch("latest/orders")
      .then((res) => resolve("Order details: 4 items"))
      .catch((error) => reject("Error fetching order details"));
  });
};

getUserProfile()
  .then((userName) => {
    console.log(`User: ${userName}`);
    return getUserOrders(userName); // Fetch orders after profile
  })
  .then((orders) => {
    console.log(`Total Orders: ${orders}`);
    return getOrderDetails(orders); // Fetch order details after orders
  })
  .then((orderDetails) => {
    console.log(`Latest Order: ${orderDetails}`);
  })
  .catch((error) => {
    console.log("Error:", error);
  });


```

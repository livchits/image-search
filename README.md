# A React image search app

This is an image search app made following [this challenge](https://www.codementor.io/projects/image-search-gallery-au63vo9tfr) from Codementor.

The user can input some text to search images using the Unsplash's API. It shows up to 10 images, a message if no images weren't found or an error message if something went wrong with the API. Also the user can click on each image to see it on Unsplash.

![imagen](https://user-images.githubusercontent.com/48001346/132268135-93e84915-e6e6-4ce5-92ab-23b395a80766.png)

I used:

- React
- TailwindCSS
- Snowpack with Create Snowpack App

Visit the app [here](https://image-search-app.onrender.com/).

### Run it locally

To run the app locally, you have to clone the repository and add an `.env` file with to variables, replacing the value of the second with an API access key from Unsplash:

```
SNOWPACK_PUBLIC_API_URL=https://api.unsplash.com/search/photos?page=1&query=
SNOWPACK_PUBLIC_API_ACCESS_KEY=your_api_key
```

Then you have to install all the dependencies with `npm run install` and execute `npm run start` to run the app in the development mode.

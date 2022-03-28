const getPostbybyId = async (articleId) => {
  try {
    let data = await fetch(`http://localhost:4000/api/posts/${articleId}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();
    if (data.ok) {
      return response;
    } else {
      // should navigate to error page
      throw new Error(response.error);
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getPostbybyId;

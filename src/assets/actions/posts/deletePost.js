const deletePost = async (postId) => {
  try {
    console.log("at delete post");
    let data = await fetch(`http://localhost:4000/api/posts/delete/${postId}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem(`token`),
      },
    });
    const response = await data.json();
    console.log(response);
    if (data.ok) {
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default deletePost;
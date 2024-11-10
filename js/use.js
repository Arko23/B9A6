// Fetch data from the API
fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    .then(response => response.json())
    .then(data => {
        
        data.forEach(post => {
            
            const postDiv = document.createElement('div');
            postDiv.classList.add('flex', 'flex-col', 'card', 'bg-base-100', 'shadow-xl');
            postDiv.innerHTML = `
            <figure class="p-3 rounded-lg"><img src="${post.cover_image ?? 'placeholder.jpg'}" alt="${post.title}" /></figure>
            <div class="flex flex-col p-5 gap-5">
                <p class="flex"><img src="images/cal.png" alt=""><span>${post.author.posted_date ?? 'Unknown Date'}</span></p>
                <h3 class="text-2xl text-gray-900 font-semibold">${post.title}</h3>
                <p class="text-gray-700 text-sm font-semibold">${post.description}</p>
            </div>
            <div class="flex p-5 gap-8">
                <div class="avatar">
                    <div class="w-24 rounded-xl">
                        <img src="${post.profile_image ?? 'default-avatar.jpg'}" alt="${post.author.name}" />
                    </div>
                </div>
                <div class="flex flex-col">
                    <h3 class="text-2xl text-gray-900 font-semibold"><span>${post.author.name}</span></h3>
                    <p class="text-gray-700 text-sm font-semibold"><span>${post.author.designation ?? 'Unknown Designation'}</span></p>
                </div>
            </div>
            `;
            
            
            document.getElementById('latest-news-section').appendChild(postDiv);
        });
        
        
        document.getElementById('latest-news-section').style.display = 'flex';
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        
        document.getElementById('latest-news-section').style.display = 'flex';
    });

let countedPost = parseInt("0");
document.addEventListener("DOMContentLoaded", displayData);

async function fetchData() {
  try {
    const apiUrl = `https://openapi.programming-hero.com/api/retro-forum/posts`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
}


function mark(postId, postTitle, viewCount) {
  console.log("postId : " + postId);
 
  countedPost++;
  console.log("countedPost : " + countedPost);

  
  document.getElementById("marked").innerText = countedPost;

  
  let mork = document.getElementById("mork");
  console.log("Marked section parent element :");
  console.log(mork);

  
  let countedPostCard = document.createElement("div");
  countedPostCard.classList.add(
    "flex",
    "rounded-md",
    "shadow-md",
    "p-3",
    "bg-white"
  );
  countedPostCard.innerHTML = `
        <h3 class="text-xl text-gray-700 font-semibold ">${postTitle}</h3>
        <p class="flex items-center text-gray-700 text-sm font-semibold"><img src="images/eye.png" alt=""> ${viewCount}</p>
    `;
  console.log("on Mark function: ");
  console.log(countedPostCard);

  mork.appendChild(countedPostCard);
}


async function displayData() {
  const data = await fetchData();
  if (data) {
    
    console.log(data);
    
  } else {
    console.log("data not available");
  }

  
  const { posts } = data;

  
  posts.forEach((post) => {
    
    let postId = post.id;
  
    let authorName = post.author.name;
   
    let postTitle = post.title;

    let postDescription = post.description;

    let commentCount = post.comment_count;

    let category = post.category;

    let profilePic = post.image;

    let isActive = post.isActive;

    let postedTime = post.posted_time;

    let viewCount = post.view_count;
    

    
    let hellop = document.getElementById("hellop");
    console.log("parent element : ");
    console.log(hellop);

    
    let postCard = document.createElement("div");

    
    if (isActive) {
      postCard.innerHTML = `
                        <!-- boiler card component -->
                        <div class="flex flex-col rounded-2xl  hover:border-2  border-black shadow-xl p-1 lg:p-5 gap-6">
                            <div class="flex flex-col lg:flex-row gap-2 lg:gap-8 border-b-2 border-dashed border-gray-600 rounded-lg p-0 lg:p-5">
                                <!-- Avatar -->
                                <div class="avatar border-blue-500 p-5">
                                    <div class="w-24 rounded-full">
                                        <span class="top-2 right-6 absolute  w-7 h-7 bg-green-400 border border-white  rounded-full"></span>
                                        <img src="${profilePic}" />
                                    </div>
                                    </div>
                                <!-- Details -->
                                <div class="flex flex-col border-red-500 p-5">
                                    <!-- Category & Author -->
                                    <div class="flex gap-10">
                                        <p class="text-gray-700 text-sm font-bold">#${category}</p>
                                        <p class="text-gray-700 text-sm font-bold">Author : ${authorName}</p>
                                    </div>

                                    <!-- Description -->
                                    <div class="flex flex-col">
                                        <h3 class="text-2xl text-gray-900 font-semibold">"${postTitle}"</h3>
                                        <p class="text-gray-700 text-sm font-semibold">${postDescription}</p>
                                    </div>
                                </div>
                            </div>

                            <!-- comment view & marked -->
                            <div class="flex justify-between">
                                <!-- comment, view & posted time -->
                                <div class="flex lg:ml-52 p-3 gap-5">
                                    <!-- Comment count -->
                                    <p class="flex items-center text-gray-700 text-sm font-semibold"><i class="fa-regular fa-message"></i> ${commentCount}</p>
                                    <!-- viewed count -->
                                    <p class="flex items-center text-gray-700 text-sm font-semibold"><i class="fa-regular fa-eye"></i> ${viewCount}</p>
                                    <!-- posted time -->
                                    <p class="flex items-center text-gray-700 text-sm font-semibold"><i class="fa-regular fa-clock"></i> ${postedTime} min </p>
                                </div>
                                <!-- marked part -->
                                <button onclick="mark(${postId}, '${postTitle.replace(/'/g, "\\'")}', ${viewCount})" class="hover:border-2 hover:shadow-xl hover:border-red-500 m-3 rounded-full"><img src="images/lam.png" alt=""></button>
                            </div>
                        </div>
  `
    } else {
        postCard.innerHTML = `
                        <!-- boiler card component -->
                        <div class="flex flex-col rounded-2xl  hover:border-2  border-black shadow-xl p-1 lg:p-5 gap-6">
                            <div class="flex flex-col lg:flex-row gap-2 lg:gap-8 border-b-2 border-dashed border-gray-600 rounded-lg p-0 lg:p-5">
                                <!-- Avatar -->
                                <div class="avatar border-blue-500 p-5">
                                    <div class="w-24 rounded-full">
                                        <span class="top-2 right-6 absolute  w-7 h-7 bg-red-400 border border-white  rounded-full"></span>
                                        <img src="${profilePic}" />
                                    </div>
                                    </div>
                                <!-- Details -->
                                <div class="flex flex-col border-red-500 p-5">
                                    <!-- Category & Author -->
                                    <div class="flex gap-10">
                                        <p class="text-gray-700 text-sm font-bold">#${category}</p>
                                        <p class="text-gray-700 text-sm font-bold">Author : ${authorName}</p>
                                    </div>

                                    <!-- Description -->
                                    <div class="flex flex-col">
                                        <h3 class="text-2xl text-gray-900 font-semibold">"${postTitle}"</h3>
                                        <p class="text-gray-700 text-sm font-semibold">${postDescription}</p>
                                    </div>
                                </div>
                            </div>

                            <!-- comment view & marked -->
                            <div class="flex justify-between">
                                <!-- comment, view & posted time -->
                                <div class="flex lg:ml-52 p-3 gap-5">
                                    <!-- Comment count -->
                                    <p class="flex items-center text-gray-700 text-sm font-semibold"><i class="fa-regular fa-message"></i> ${commentCount}</p>
                                    <!-- viewed count -->
                                    <p class="flex items-center text-gray-700 text-sm font-semibold"><i class="fa-regular fa-eye"></i> ${viewCount}</p>
                                    <!-- posted time -->
                                    <p class="flex items-center text-gray-700 text-sm font-semibold"><i class="fa-regular fa-clock"></i>  ${postedTime} min </p>
                                </div>
                                <!-- marked part -->
                                <button onclick="mark(${postId}, '${postTitle.replace(/'/g, "\\'")}', ${viewCount})" class="hover:border-2 hover:shadow-xl hover:border-red-500 m-3 rounded-full"><img src="images/lam.png" alt=""></button>
                            </div>
                        </div>
  `
    }

    

    hellop.appendChild(postCard);
  });
}


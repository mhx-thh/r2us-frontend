## Tin học hóa - Mùa hè xanh 2021 - Trường ĐH Khoa học tự nhiên TP.HCM

## Guide to run on local using npm :
- Step 1 : At the terminal, install npm with the command :
  ```php
  install npm 
  ```
- Step 2 : After installing npm, install the next build with the command: :
    ```php
  npm run build
    ```
- Step 3 : On the terminal bar continue to type the following command to run the program:
  ```php
  npm run dev
  ```
- Step 4 : click url : http://localhost:3000 to run on local

## Guide to deloy on netlify by drag and drop :
- Step 1 : At the terminal, create file build : 
   ```php
  npm run build
  ```
- Step 2 : Open netlify and log in netlify in browser
   
- Step 3 : Drag and drop the newly created build file into the upload section on netlify to proceed with deloy project

## Project Structure R2US : 
#### I. Functions of the program  :

|  Function name| Function specific implementation      |    
|---------------|---------------------------------|  
|   About       | information about the website design team and the message     |   
|   Search      | Find information about documents |     
|   SV5T        |Information about student of 5 merits   |   
|   Sign Up     | Register an account to use web services|    
|   Log In      |Log in to your account           |     
|   View        |   watch document information     |
|   Review      |   Review of the subject            |    
#### II. Program directory structure  :
Present only the important files and need to know in the project:
1. api : query to a set of functions in use. Contains api files to call to the server. 
   - academicApi.ts : get information about the subject, academic year, faculty, subject, course seal of students, instructors. 
   - generic.cs : instead of having to rewrite the functions, write the functions in the function in generic, then the ipa call that function and use it.
   -  groupAPI.ts gets a group information about : group information, instructors, documents and reviews. Get information about a lecturer, create a new group information
   -  userApi.ts : collect api calls to the backend
2. Redux: seek to redux, user Slice.ts: tập hợp các mã thông báo chọn lọc, chọn người dùng, chọn trạng thái, đồng bộ. store.ts: store of reduxtoolit share toàn ứng dụng
3. public : Files about icons and images used in the website interface, images can be viewed on the website by the url of that image.
4. Page : contains the program's pages including: home , login , search , sv5t , user , admin , about . The main function is to bundle all the code together at __app.tsx using a react-redux provider, each page calls multiple components from the Component file. There is an important file in the Page, the group, every time we click on the document, the url will be different, we can't create it in the code but have to access the database, the purpose of the group is that, other pages will find it. to the group that uses the plug.
5. Component :  Component : includes the component functions used in the Pages file, in which the component files are shared, and some special files.
adminPage : includes the components of the admin page
class : includes the components of the group function, create reviews, review teachers,...
footer,header: component of header and footer
HomePage : components of the Home page

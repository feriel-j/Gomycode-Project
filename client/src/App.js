import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Profile from "./components/profil/Profile";
import PrivateRoute from "./routes/PrivateRoute";
import Register from "./components/logInOut/Register";
import Login from "./components/logInOut/Login";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storyget } from "./JS/userSlice/storiesSlice";
import { meetget } from "./JS/userSlice/meetupSlice";
import Stories from "./components/stories/Stories";
import Posts from "./components/posts/Posts";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Story from "./components/stories/Story";
import Meets from "./components/meetUp/Meets";
import { postGet } from "./JS/userSlice/postSlice";
import { userCurrent, usersGet } from "./JS/userSlice/userSlice";
import MeetDetails from "./components/meetUp/MeetDetails";
import StoryDetails from "./components/stories/StoryDetails";
import DashAdmin from "./components/admin/DashAdmin";
import UsersList from "./components/admin/UsersList";
import StoriesList from "./components/admin/StoriesList";
import PostsList from "./components/admin/PostsList";
import MeetupsList from "./components/admin/MeetupsList";

function App() {
  const dispatch = useDispatch();

  const stories = useSelector((state) => state.story.story);
  const meetups = useSelector((state) => state.meet.meet);
  const posts = useSelector((state) => state.post.post);
  const users = useSelector((state) => state.user.user);
  const isAuth = localStorage.getItem("token");

  console.log(meetups);
  const [ping, setping] = useState(false);

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
    dispatch(storyget());
    dispatch(meetget());
    dispatch(postGet());
    dispatch(usersGet());
  }, [ping]);

  return (
    <div className="App">
      <Nav ping={ping} setping={setping} />

      <Routes>
        <Route exact path="/" element={<Home stories={stories} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashbord"
          element={
            <DashAdmin
              users={users}
              stories={stories}
              posts={posts}
              meetups={meetups}
            />
          }
        />
        <Route element={<PrivateRoute />}>
          <Route
            path="/profile"
            element={
              <Profile
                stories={stories}
                ping={ping}
                setping={setping}
                posts={posts}
              />
            }
          />
        </Route>
        <Route path="/about" element={<About />} />
        <Route
          path="/stories"
          element={<Stories stories={stories} ping={ping} setping={setping} />}
        />
        <Route
          path="/posts"
          element={<Posts posts={posts} ping={ping} setping={setping} />}
        />
        <Route
          path="/meet"
          element={<Meets meetups={meetups} ping={ping} setping={setping} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/story"
          element={<Story ping={ping} setping={setping} />}
        />
        <Route
          path="/meetdetails/:id"
          element={<MeetDetails ping={ping} setping={setping} />}
        />
        <Route
          exact
          path="/storydetails/:id"
          element={<StoryDetails ping={ping} setping={setping} />}
        />

        <Route
          path="/users"
          element={<UsersList ping={ping} setping={setping} />}
        />
        <Route
          path="/storieslist"
          element={<StoriesList ping={ping} setping={setping} />}
        />
        <Route
          path="/postsList"
          element={<PostsList ping={ping} setping={setping} />}
        />
        <Route
          path="/meetupslist"
          element={<MeetupsList ping={ping} setping={setping} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

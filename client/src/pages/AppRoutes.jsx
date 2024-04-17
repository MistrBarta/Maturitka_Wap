import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import CatCreateForm from "./object_1_Cats/CatCreateForm/CatCreateForm";
import CatUpdateForm from "./object_1_Cats/CatUpdateForm/CatUpdateForm";
import CatView from "./object_1_Cats/CatView/CatView";
import CatList from "./object_1_Cats/CatList/CatList";
import CreatedCat from "./object_1_Cats/CatCreateForm/CreatedCat";
import CatPage from "./object_1_Cats/CatPage/CatPage";

import DogCreateForm from "./object_2_Dogs/DogCreateForm/DogCreateForm";
import DogUpdateForm from "./object_2_Dogs/DogUpdateForm/DogUpdateForm";
import DogView from "./object_2_Dogs/DogView/DogView";
import DogList from "./object_2_Dogs/DogList/DogList";
import CreatedDog from "./object_2_Dogs/DogCreateForm/CreatedDog";
import DogPage from "./object_2_Dogs/DogPage/DogPage";

import BoyCreateForm from "./object_3_Boys/BoyCreateForm/BoyCreateForm";
import BoyUpdateForm from "./object_3_Boys/BoyUpdateForm/BoyUpdateForm";
import BoyView from "./object_3_Boys/BoyView/BoyView";
import BoyList from "./object_3_Boys/BoyList/BoyList";
import CreatedBoy from "./object_3_Boys/BoyCreateForm/CreatedBoy";
import BoyPage from "./object_3_Boys/BoyPage/BoyPage";

import GirlCreateForm from "./object_4_Girls/GirlCreateForm/GirlCreateForm";
import GirlUpdateForm from "./object_4_Girls/GirlUpdateForm/GirlUpdateForm";
import GirlView from "./object_4_Girls/GirlView/GirlView";
import GirlList from "./object_4_Girls/GirlList/GirlList";
import CreatedGirl from "./object_4_Girls/GirlCreateForm/CreatedGirl";
import GirlPage from "./object_4_Girls/GirlPage/GirlPage";

import Navbar from "../components/Navbar/navbar";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createcat" element={<CatCreateForm />} />
          <Route path="/updatecat/:id" element={<CatUpdateForm />} />
          <Route path="/cat/:id" element={<CatView />} />
          <Route path="/cats" element={<CatList />} />
          <Route path="/createdcat/:id" element={<CreatedCat />} />
          <Route path="catpage" element={<CatPage /> } />

          <Route path="/createdog" element={<DogCreateForm />} />
          <Route path="/updatedog/:id" element={<DogUpdateForm />} />
          <Route path="/dog/:id" element={<DogView />} />
          <Route path="/dogs" element={<DogList />} />
          <Route path="/createddog/:id" element={<CreatedDog />} />
          <Route path="dogpage" element={<DogPage /> } />

          <Route path="/createboy" element={<BoyCreateForm />} />
          <Route path="/updateboy/:id" element={<BoyUpdateForm />} />
          <Route path="/boy/:id" element={<BoyView />} />
          <Route path="/boys" element={<BoyList />} />
          <Route path="/createdboy/:id" element={<CreatedBoy />} />
          <Route path="boypage" element={<BoyPage /> } />

          <Route path="/creategirl" element={<GirlCreateForm />} />
          <Route path="/updategirl/:id" element={<GirlUpdateForm />} />
          <Route path="/girl/:id" element={<GirlView />} />
          <Route path="/girls" element={<GirlList />} />
          <Route path="/createdgirl/:id" element={<CreatedGirl />} />
          <Route path="girlpage" element={<GirlPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

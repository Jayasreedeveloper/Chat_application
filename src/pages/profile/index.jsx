import {useAppStore} from "@/store";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {IoArrowBack} from "react-icons/io5";
import {FaPlus, FaTrash} from "react-icons/fa";
import {colors} from "@/lib/utils";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { UPDATE_PROFILE_ROUTE } from "@/utils/constant";
import apiClient from "@/utils/apiClient";


const Profile = () => {
  const navigate = useNavigate();
  const {userInfo, setUserInfo} = useAppStore();
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [image] = useState(null);
  const [hovered,setHovered] = useState(false);
  const [selectedColor,setSelectedColor] = useState(0);

const validateProfile = () => {
  if (!firstName) {

    toast.error("First Name is required");
    return false}
    if (!lastName) {
      toast.error("Last Name is required");
      return false;
    }
      return true;
    };
    
const saveChanges = async () => {
  if (validateProfile()){
    try {
      const response = await apiClient.post(UPDATE_PROFILE_ROUTE, {firstName, lastName, color: selectedColor},{withCredentials: true}

      );
      if(response.status===200 && response.data){
        setUserInfo({...response.data});}
        toast.success("Profile updated successfully");
navigate("/chat");


    }catch (error) {
      console.log(error);
    }
  }


  };

  const handleFileInputClick = () => { fileInputRef.current.click(); 
  };
  const  handleImageCHangeFile = async (e) => {

  return (
    <div className="bg-[#1e1e1e] h-screen flex justify-center items-center flex-col gap-10">
      <div className="flex flex-col gap-10 w-[80vw] md:w-max">
        <div>
          <IoArrowBack className="text-4xl lg:text-6xl text-white/90 cursor-pointer" />
        </div>
        <div className="grid grid-cols-2">
          <div className="h-full w-32 md:w-48 relative flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
              <Avatar className="h-32 w-32 md:w-48 md:h-48 rounded-full overflow-hidden">
                {image?(<AvatarImage
              src={image}
              alt="profile"
              className="object-cover -full h-full bg-black"/>
                ):(
                  <div className={'uppercase h-32 w-32 md:w-48 md:h-48 text-5xl border-[1px] flex items-center justify-center rounded-full ${getColor(selectedColor)}'}>
                   { firstName
                    ? firstName.split("").shift()
                    : userInfo.email.split("").shift()}
                      </div>
                    )}

                   </Avatar>
                  {hovered && (
                    <div className="absolute inset-0 flec items-center justify-center bg-black/50 ring-fuchsia-50 rounded-full"
                    onClick={image ? handleDeleteImage : handleFileInputClick}
                    >
                      {image?(
                        <FaTrash className="text-white text-3xl cursor-pointer"/>):(
                        <FaPlus className="text-white text-3xl cursor-pointer"/>
                      )}</div>
                      
                
                  )}
                  <input type="text" ref={fileInputRef} ></input>
          </div>
          <div className="flex min-w-32 md:min-w-64 flex-col gap-5 text-white items-center justify-center">
            <div className="W-full">
              <Input
               placeholder="Email"
                type="email" 
                disabled value={userInfo.email} className="rounded-lg p-6 bg-[#2c2e3b] border-none "/>
            </div>
            <div className="w-full">
              <Input
               placeholder="first Name"
                type="text"
                onChange={(e) => setFirstName(e.target.value)} 
                value={firstName} className="rounded-lg p-6 bg-[#2c2e3b] border-none "/>
            </div>
            <div className="w-full">
              <Input
                placeholder="Last Name"
                type="text" 
onChange={(e) => setLastName(e.target.value)}
                value={lastName} className="rounded-lg p-6 bg-[#2c2e3b] border-none "
                />
            </div>
            <div className="w-full flex gap-5">
            {colors.map((color, index) => (
  <div
    key={index}
    className={`h-8 w-8 rounded-full cursor-pointer transition-all duration-300 ${color} ${
      selectedColor === index ? "outline outline-white/50 outline-1" : ""
    }`}
    onClick={() => setSelectedColor(index)}
  ></div>
))}

                
            </div>
          </div>
        </div >
        <div className="w-full">
        <Button className="h-16 w-full bg-purple-700 hover:bg-purple-900 transition-all duration-300" onClick={saveChanges}>
        </Button>
        </div>
      </div>
    </div>
    
          )}
        }
export default Profile;
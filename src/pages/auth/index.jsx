import React, { useState } from 'react'
import Background from "../../assets/login2.png";
import Victory from "../../assets/Victory.svg";
import {Tabs} from "../../components/ui/tabs.jsx";
import { TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Input } from '../../components/ui/input';
import { Button } from '@/components/ui/button';


const Auth = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [ confirmPassword, setConfirmPassword ] = useState("");

   const handlelogin = async () => {};

    const handleSignUp = async () => {};

  return (
    <div className='h-[100vh] w-[100w] flex items-center justify-center '> 
      <div className='h-[90vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2' >
       <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='flex items-center justify-center flex-col'>
             <div className='flex items-center justify-center'>
                 <h1 className='text-5xl font-bold md:text-6xl'>Welcome</h1>
                 <img src={Victory} alt="Victory Emoji" className='h-[100px]' />
             </div>
             <p className='font-medium text-center'>
              Fill in the details to get started with the best chat app!
             </p> 
          </div>
          <div className='flex items-center justify-center w-full'>
          <Tabs className='w-3/4'>
            <TabsList className='bg-transparent rounded-none w-full'>
              <TabsTrigger value="login" className='w-1/2 text-black text-opacity-90 border-b-2 rounded-none p-3 transition-all data-[state=active]:border-b-purple-500 data-[state=active]:text-black data-[state=active]:font-semibold'>Login</TabsTrigger>
              <TabsTrigger value="SignUp" className='w-1/2 text-black text-opacity-90 border-b-2  rounded-none p-3 transition-all data-[state=active]:border-b-purple-500 data-[state=active]:text-black data-[state=active]:font-semibold'>SignUp</TabsTrigger>
            </TabsList>
            <TabsContent className='flex flex-col gap-5 mt-10' value="login">
             
              <Input
              placeholder="Email"
              type="email"
              className="rounded-full p-6"
              value={email}
              onChange={r => setEmail(e.target.value)}
              />

            <Input
              placeholder="Password"
              type="password"
              className="rounded-full p-6"
              value={password}
              onChange={r => setPassword(e.target.value)}
              />
             
             <Button className="rounded-full p-6" onClick={handlelogin}>Login</Button>
               
             
            </TabsContent>
            <TabsContent className='flex flex-col gap-5' value="SignUp">

            <Input
              placeholder="Email"
              type="email"
              className="rounded-full p-6"
              value={email}
              onChange={r => setEmail(e.target.value)}
              />

<Input
              placeholder="Password"
              type="Password"
              className="rounded-full p-6"
              value={password}
              onChange={r => setPassword(e.target.value)}
              />


<Input
              placeholder="Confirm Password"
              type="Password"
              className="rounded-full p-6"
              value={confirmPassword}
              onChange={r => setConfirmPassword(e.target.value)}
              />

<Button className="rounded-full p-6" onClick={handleSignUp}>SignUp</Button>
               
            </TabsContent>
          </Tabs>

          </div>
       </div>
       <div className=' hidden xl:flex justify-center items-center'>
        <img src={Background} alt="background login" className='h-[700px]' />
       </div>
      </div>

      </div>
  )
}

export default Auth;
"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Auth = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/auth/signin')
    }, []);

  return <div>Auth</div>;
};

export default Auth;

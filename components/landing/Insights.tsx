import Image from "next/image";
import Link from "next/link";
import {Avatar, Button} from "antd";
import {UserOutlined} from "@ant-design/icons";

const blogs = [
    {
        id: 1,
        title: "Top 5 reasons to invest in marketing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eligendi.",
        image: "/assets/images/blog/img-11.jpg",
        category: "Marketing",
        createdAt: new Date(),
    },
    {
        id: 2,
        title: "How can marketing help your business?",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eligendi.",
        image: "/assets/images/blog/img-12.jpg",
        category: "Strategy",
        createdAt: new Date(),
    },
    {
        id: 2,
        title: "The ultimate guide to marketing success",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eligendi.",
        image: "/assets/images/blog/img-13.jpg",
        category: "Business",
        createdAt: new Date(),
    },
]


export default function Insights(){
    return(
        <section className="max-w-screen-xl mx-auto my-16 space-y-10 px-5">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Gain valuable insights</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {blogs.map(blog => (
                    <div key={blog.id} className="rounded-3xl overflow-hidden p-5 bg-secondary">
                        <div className="relative rounded-3xl overflow-hidden">
                            <Link href="#">
                                <Image className="hover:scale-110 transition" width={400} height={400} src={blog.image} alt={blog.image} />
                            </Link>
                            <Link href="#" className="absolute top-3 left-3">
                                <Button type="primary" size="small">{blog.category}</Button>
                            </Link>
                        </div>
                        <div className="mt-8 space-y-5">
                            <h3 className="text-2xl text-center font-bold">
                                <Link href="#">{blog.title}</Link>
                            </h3>
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex items-center gap-1">
                                    <Avatar size={28} icon={<UserOutlined />} />
                                    <h6 className="font-semibold text-sm">Allen</h6>
                                </div>
                                <div className="">
                                    <div className="size-1 bg-gray-300 rounded-full"/>
                                </div>
                                <p>{blog.createdAt.toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
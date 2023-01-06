import Link from "next/link";
export default function ArticleDetails({title,authors,path,key}){
    return (
        <li className="nav-item">
            <Link 
            href={{
                pathname:"/article",
                query:{
                    title:title,
                    pathToArticle:path,
                    authors:authors
                }}}  className="nav-link py-1 px-0">How Internationalised Is Your Curriculum? University Graduate Students Speak Out </Link>
        </li>
    );
}
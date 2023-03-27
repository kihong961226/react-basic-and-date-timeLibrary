import { useCallback } from "react";
import CommentItem from "./CommentItem";

interface CommentListProps {
  title: string;
  content: string;
  likes: number;
}
interface Props {
  commentList: CommentListProps[];
}

export default function Comments(props: Props) {
  const handleClick = useCallback(() => {
    console.log("눌림");
  }, []);

  return (
    <div>
      {props.commentList.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

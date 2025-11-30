import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockUser } from '@/data/mockData';

const CommentSection = ({ comments: initialComments }) => {
  const [comments, setComments] = useState(initialComments || []);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const comment = {
      user: "You",
      text: newComment,
      avatar: mockUser.avatar
    };
    
    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="space-y-6 pt-6 border-t border-border">
      <h3 className="font-serif text-xl font-bold">Comments ({comments.length})</h3>
      
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-muted-foreground text-sm italic">No comments yet. Be the first!</p>
        ) : (
          comments.map((comment, idx) => (
            <div key={idx} className="flex gap-3">
              <Avatar className="w-8 h-8 border border-border">
                <AvatarImage src={comment.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.user}`} />
                <AvatarFallback>{comment.user[0]}</AvatarFallback>
              </Avatar>
              <div className="bg-secondary/30 p-3 rounded-2xl rounded-tl-none flex-1">
                <p className="text-xs font-bold text-foreground mb-0.5">{comment.user}</p>
                <p className="text-sm text-muted-foreground">{comment.text}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 items-center sticky bottom-0 bg-background pt-2 pb-4">
        <Avatar className="w-8 h-8">
          <AvatarImage src={mockUser.avatar} />
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
        <div className="relative flex-1">
          <Input 
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..." 
            className="pr-10 rounded-full bg-secondary/20 border-transparent focus:bg-background focus:border-primary transition-all"
          />
          <Button 
            type="submit" 
            size="icon" 
            variant="ghost" 
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-primary hover:text-primary hover:bg-primary/10 rounded-full"
            disabled={!newComment.trim()}
          >
            <Send size={16} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;

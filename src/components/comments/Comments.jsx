import { Button } from '@material-tailwind/react';
import React, { useContext } from 'react';
import myContext from '../../context/myContext';

function Comment({ addComment, commentText, setcommentText, allComment, fullName, setFullName }) {
  const context = useContext(myContext);
  const { mode } = context;

  const bgColor = mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)';
  const textColor = mode === 'dark' ? 'white' : 'black';
  const buttonBgColor = mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)';
  const buttonTextColor = mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)';

  return (
    <section className="py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg lg:text-2xl font-bold" style={{ color: textColor }}>
            Make Comment
          </h2>
        </div>
        {/* Comment Form */}
        <form className="mb-6">
          {/* Full Name Input */}
          <div
            className={`py-2 px-4 mb-4 rounded-lg shadow-inner border border-gray-200`}
            style={{ background: bgColor }}
          >
            <input
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full text-sm border-0 focus:ring-0 focus:outline-none"
              style={{ background: bgColor, color: textColor }}
            />
          </div>

          {/* Text Area */}
          <div
            className={`py-2 px-4 mb-4 rounded-lg shadow-inner border border-gray-200`}
            style={{ background: bgColor }}
          >
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows={6}
              value={commentText}
              onChange={(e) => setcommentText(e.target.value)}
              className="w-full text-sm border-0 focus:ring-0 focus:outline-none"
              style={{ background: bgColor, color: textColor }}
              placeholder="Write a comment..."
              required
            />
          </div>
          {/* Button */}
          <div>
            <Button
              onClick={addComment}
              style={{
                background: buttonBgColor,
                color: buttonTextColor
              }}
              className="w-full py-2 rounded-lg shadow-sm hover:bg-opacity-80"
            >
              Post Comment
            </Button>
          </div>
        </form>

        {/* Comments List */}
        <article className={`p-6 mb-6 rounded-lg`} style={{ background: bgColor }}>
          {allComment.map((item, index) => {
            const { fullName, date, commentText } = item;
            return (
              <div key={index} className="mb-4">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center bg-white px-2 py-1 rounded-lg shadow-sm">
                    <p className="text-lg mr-3" style={{ color: textColor }}>
                      {fullName}
                    </p>
                    <p className="text-sm" style={{ color: textColor }}>
                      {date}
                    </p>
                  </div>
                </footer>
                <p className="text-md" style={{ color: textColor }}>
                  ↳ {commentText}
                </p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Comment;

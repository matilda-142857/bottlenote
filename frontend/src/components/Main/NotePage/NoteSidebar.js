import { Link, useHistory } from "react-router-dom";
import { getAllNotes } from "../../../store/notes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './NotePage.css';

const NoteSidebar = () => {

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  const notes = useSelector((state) => state.notes);

  const notesSorted = Object.values(notes).sort((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt)
  );

  useEffect(() => {
    if (sessionUser) {
      dispatch(getAllNotes());
    }
  }, [dispatch, sessionUser])

  if (notesSorted.length) {
    return (
      <>
      <div className="notes-box">
        <div className="notes-box-top">
            <div className ="notes-box-name">
            <i className="fas fa-book-open" id="openbook-icon"></i>
                Your Notes
            </div>
            <div className="notes-box-number">
                {notesSorted.length} notes 
            </div>
        </div>
        {notesSorted.map((note) => (
          <Link to={`/notes/${note.id}`} key={note.id}>
            <div className="note-ele">
              <div className="note-title">{note.title}</div>
              <div className="note-content-preview">
                {note.content}
              </div>
            </div>
          </Link>
        ))}
        <div className="note-box-end">
              End of your notes  
              <i className="fas fa-paper-plane"></i>
        </div>
        </div>
      </>
    );
  } 
  
  else {

    return (
      <div className="no-notes-wrap">
        <i className="fas fa-signature"></i>
        <i className="fas fa-pen"></i>
        <div>It starts with a note...</div>
      </div>
    );
  }
};

export default NoteSidebar;

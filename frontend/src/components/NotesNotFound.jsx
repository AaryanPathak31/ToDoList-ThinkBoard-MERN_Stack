import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold">No notes yet</h3>
      <p className="text-base-content/70">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link to="/create" className="btn btn-primary">
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;

// This component displays a message when no notes are found, encouraging the user to create their first note.
// It includes a notebook icon, a title, a brief description, and a button to navigate
// to the note creation page. The design is simple and centered, making it clear and inviting for users to take action. 
// The use of Tailwind CSS classes ensures a responsive and visually appealing layout.
// The NotebookIcon from lucide-react is used to visually represent the concept of notes, enhancing the user experience.
// The component is designed to be reusable and can be easily integrated into any page where notes are expected but not found.
// It can be imported and used in various parts of the application, such as the main notes page or when filtering notes.
// The component is lightweight and does not include any complex logic, making it easy to maintain and
// modify in the future if needed. It serves as a friendly prompt for users to engage with the note-taking functionality of the application.
// This component is part of a note-taking application built with React and Tailwind CSS.
// It is designed to be used in a scenario where the user has not created any notes yet
// and provides a clear call to action to encourage them to start creating notes.
// It can be easily integrated into the main notes page or any other relevant section of the application.
// The component is styled using Tailwind CSS classes for a clean and modern look.
// It is a functional component that can be imported and used in other parts of the application.
// The component is self-contained and does not rely on any external state or props, making it easy to use in different contexts.
// The design is responsive and will adapt to different screen sizes, ensuring a good user experience on
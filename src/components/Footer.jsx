export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        
          <p>
            <a href="#" className="hover:text-white">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </footer>
    );
  }
  
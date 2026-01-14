import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found"
        description="Oops! The page you're looking for doesn't exist. Return to Meowli's homepage."
        noIndex={true}
      />
      <main className="min-h-screen flex items-center justify-center bg-background px-4">
        <article className="text-center max-w-md">
          <div className="text-8xl mb-6" role="img" aria-label="Sad cat">😿</div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            Oops! Looks like this page wandered off. Even our best tracking couldn't find it!
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
        </article>
      </main>
    </>
  );
};

export default NotFound;

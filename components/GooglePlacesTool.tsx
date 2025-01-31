import { makeAssistantToolUI } from "@assistant-ui/react";

interface GooglePlace {
  name: string;
  id: string;
  address: string;
  phoneNumber: string;
  website: string;
}

const GooglePlacesTool = makeAssistantToolUI({
  toolName: "google_places",
  render: ({ args, result }) => {
    const { input } = args as { input: string };
    let places: GooglePlace[] = [];
    try {
      places = JSON.parse(result as string) as GooglePlace[];
    } catch (error) {
      places = [];
    }

    return (
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            Found {places.length} place{places.length !== 1 ? "s" : ""} for
            query:
            <span className="font-medium ml-1">"{input}"</span>
          </p>
        </div>
      </div>
    );
  },
});

export default GooglePlacesTool;

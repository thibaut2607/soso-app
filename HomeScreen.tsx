
import React from "react";
import { useRouter } from "next/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenText, Brain, Calendar, Users, Camera, FileText } from "lucide-react";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
        SimplicyStudy
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Bienvenue ! Choisissez une fonctionnalité pour commencer.
      </p>

      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        <Card onClick={() => router.push("/scan-synthese")} className="cursor-pointer">
          <CardContent className="flex items-center gap-4 py-4">
            <BookOpenText className="text-blue-600" />
            <span className="font-medium">Scan & Synthèse</span>
          </CardContent>
        </Card>
        <Card className="cursor-pointer">
          <CardContent className="flex items-center gap-4 py-4">
            <Brain className="text-purple-600" />
            <span className="font-medium">Schéma & Fiches</span>
          </CardContent>
        </Card>
        <Card className="cursor-pointer">
          <CardContent className="flex items-center gap-4 py-4">
            <Calendar className="text-green-600" />
            <span className="font-medium">Planificateur</span>
          </CardContent>
        </Card>
        <Card className="cursor-pointer">
          <CardContent className="flex items-center gap-4 py-4">
            <Users className="text-teal-600" />
            <span className="font-medium">Travail de groupe</span>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8 text-sm text-gray-400">
        © 2025 SimplicyStudy. Tous droits réservés.
      </div>
    </div>
  );
}

export function ScanSyntheseScreen() {
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
        Scan & Synthèse
      </h2>

      <div className="flex flex-col items-center gap-6">
        <Button className="w-full max-w-xs flex items-center gap-2">
          <Camera className="w-5 h-5" />
          Prendre une photo
        </Button>
        <Button className="w-full max-w-xs flex items-center gap-2" variant="outline">
          <FileText className="w-5 h-5" />
          Importer un document
        </Button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        L'IA détectera automatiquement les informations importantes et générera un résumé clair.
      </p>
    </div>
  );
}

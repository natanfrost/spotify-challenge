import Typography from "@/components/ui/Typography";
import { ArrowLeft, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const GeneralInfo = ({ artist }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="flex items-center gap-4 px-4 py-2">
        <ArrowLeft onClick={() => navigate(-1)} className="cursor-pointer" />
        <Typography variant="p" className="text-muted-foreground">
          Voltar para a lista de artistas
        </Typography>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <img
          className="bg-gray-200 border-2 border-dashed rounded-xl w-full md:w-1/3 max-w-sm aspect-square object-cover"
          src={artist.images[0]?.url}
          alt={artist.name}
        />

        <div className="flex-1">
          <Typography variant="h2" className="mb-4">
            {artist.name}
          </Typography>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center bg-background rounded-full px-4 py-2">
              <Star className="text-yellow-500 fill-yellow-500 mr-2" />
              <span className="font-medium">{artist.popularity}/100</span>
            </div>

            <div className="text-muted-foreground">
              {artist.followers.total.toLocaleString()} seguidores
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {artist.genres.map((genre, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GeneralInfo;

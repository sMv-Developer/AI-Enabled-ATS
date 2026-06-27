import { motion } from 'framer-motion'
import { Card, CardContent } from "../components/common/Card"
import { Brain, Sparkles, Target, Cpu } from 'lucide-react'

export function About() {
  return (
    <main className="flex-grow p-4 sm:p-8 max-w-4xl mx-auto w-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8 py-4"
      >
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-3">
            Next-Gen ATS Intelligence
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Moving beyond rigid keyword stuffing into the era of deep semantic matching.
          </p>
        </div>

        {/* Core Description */}
        <Card className="bg-gradient-to-b from-slate-900/80 to-slate-950/80 border-blue-500/10 text-slate-100 backdrop-blur-md shadow-2xl p-6 sm:p-8">
          <CardContent className="space-y-6 p-0">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0 text-blue-400">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Context-Aware Analysis vs. Legacy Keywords</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Traditional Applicant Tracking Systems (ATS) rely on basic keyword frequency. If a job description asks for "Team Leadership" and your resume says "Managed cross-functional crews," a legacy scanner marks it as a miss. 
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mt-3">
                  <strong>ResuMatch AI is different.</strong> Powered by the latest state-of-the-art <strong>Gemini models</strong>, our platform understands the actual intent, skill levels, and semantic meaning behind your engineering and professional experiences. It maps your true capabilities directly to what recruiters are actually searching for.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white/5 border border-white/5 p-5 rounded-xl space-y-2">
            <Cpu className="h-5 w-5 text-cyan-400" />
            <h3 className="text-sm font-bold text-white">Gemini Powered</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Utilizes advanced large language models to reason over complex technical summaries and experience graphs.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/5 p-5 rounded-xl space-y-2">
            <Target className="h-5 w-5 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Semantic Mapping</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Identifies implicit qualifications and synonyms, giving you credit for what you actually know.
            </p>
          </div>

          <div className="bg-white/5 border border-white/5 p-5 rounded-xl space-y-2">
            <Sparkles className="h-5 w-5 text-amber-400" />
            <h3 className="text-sm font-bold text-white">Actionable Feedback</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Provides highly contextual upgrade directions instead of just telling you to copy-paste phrases.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  )
}

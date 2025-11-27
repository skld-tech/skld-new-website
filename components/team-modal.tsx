"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  expertise: string;
  funFact: string;
  linkedin?: string;
  website?: string;
}

interface TeamModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content - Increased width */}
          <motion.div
            className="relative bg-gray-900 rounded-2xl overflow-hidden max-w-7xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-3 gap-0">
              {/* Image Section - Slightly wider */}
              <div className="relative md:col-span-1">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full object-cover"
                />
              </div>

              {/* Content Section - Wider (2 columns instead of 1) */}
              <div className="p-8 text-white md:col-span-2">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-medium mb-2">{member.name}</h2>
                    <p className="text-blue-400 font-medium">{member.role}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Description in block format */}
                  <div>
                    {/* <h3 className="text-lg font-semibold mb-3">About</h3> */}
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      {member.description
                        .split("\n")
                        .map((paragraph, index) => (
                          <p key={index} className="mb-4 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                    </div>
                  </div>

                  {/* Expertise in block format */}
                  {member.expertise && (
                    <div>
                      {/* <h3 className="text-lg font-semibold mb-3">Expertise</h3> */}
                      <div className="text-gray-300 leading-relaxed space-y-4">
                        {member.expertise
                          .split("\n")
                          .map((paragraph, index) => (
                            <p key={index} className="mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Fun Fact */}
                  {/* {member.funFact && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Fun Fact</h3>
                      <p className="text-gray-300">{member.funFact}</p>
                    </div>
                  )} */}

                  {/* Social Links */}
                  <div className="flex space-x-4 pt-4">
                    {member.linkedin && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-gray-600 hover:bg-gray-800 bg-transparent cursor-pointer"
                        onClick={() => window.open(member.linkedin, "_blank")}
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.website && member.website !== "#" && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-gray-600 hover:bg-gray-800 bg-transparent"
                        onClick={() => window.open(member.website, "_blank")}
                      >
                        <Globe className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

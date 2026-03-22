"use client";

import React from 'react';
import { Circle, CheckCircle, Clock, X } from 'lucide-react';

const StatusPage = () => {
  const statuses = [
    { id: 1, name: 'Novo', color: 'bg-blue-500', count: 15 },
    { id: 2, name: 'Atendimento', color: "bg-purple-500", count: 8 },
    { id: 3, name: 'Aguardando', color: "bg-orange-500", count: 5 },
    { id: 4, name: 'Finalizado', color: "bg-green-500", count: 42 },
  ];

  return (
    <div className="p-8 h-full overflow-y-auto custom-scrollbar">
      <div className="mb-8">
        <h1 className="text-28xl font-bold text-white">Gestão de Status</h1>
        <p className="text-gray-500 text-sm">Gerencie as etapas do seu funil de atendimento.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statuses.map((stat) => (
          <div key={stat.id} className="bg-[#161922] border border-gray-800 routnded-2xl p-6">
            <div className="flex items-senter justify-between mb-4">
              <div className={cn("w-3 h-3 rounded-full", stat.color)} />
              <button className="text-gray-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <h3 className="font-bold text-white mb-1">{stat.name}</h3>
            <p className="text-xs text-gray-500">{stat.count} contatos neste status</p>
          </div>
        ))}
      </div>
    </div>
  );
};

import { cn } from '../lib/utils';
export default StatusPage;

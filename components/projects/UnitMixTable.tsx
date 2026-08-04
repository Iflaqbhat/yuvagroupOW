// File purpose: Filterable unit-mix table for project detail pages.
'use client';

import { useMemo, useState } from 'react';
import type { FloorPlanRow } from '@/types';
import { cn } from '@/lib/utils';

type UnitFilter = 'all' | string;

export function UnitMixTable({ rows }: { rows: FloorPlanRow[] }) {
  const [configuration, setConfiguration] = useState<UnitFilter>('all');

  const configurations = useMemo(() => {
    return Array.from(new Set(rows.map((row) => row.bhk))).sort((a, b) => a.localeCompare(b));
  }, [rows]);

  const filteredRows = useMemo(() => {
    if (configuration === 'all') return rows;
    return rows.filter((row) => row.bhk === configuration);
  }, [configuration, rows]);

  const chipClass = (active: boolean) =>
    cn(
      'inline-flex min-h-10 items-center justify-center rounded-md px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300',
      active
        ? 'smart-gradient text-accent-foreground shadow-[0_10px_25px_hsl(var(--accent)/0.18)]'
        : 'border border-foreground/15 bg-background text-muted-foreground hover:border-accent/35 hover:text-foreground',
    );

  return (
    <div className="mt-6 overflow-hidden rounded-md border border-foreground/10 bg-background shadow-[0_18px_45px_hsl(var(--foreground)/0.05)]">
      <div className="flex flex-col gap-4 border-b border-foreground/10 p-4 md:flex-row md:items-end md:justify-between md:p-5">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Filter by configuration
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setConfiguration('all')}
              className={chipClass(configuration === 'all')}
            >
              All
            </button>
            {configurations.map((config) => (
              <button
                key={config}
                type="button"
                onClick={() => setConfiguration(config)}
                className={chipClass(configuration === config)}
              >
                {config}
              </button>
            ))}
          </div>
        </div>
        <p className="text-sm font-semibold text-muted-foreground">
          Showing <span className="text-foreground">{filteredRows.length}</span> of {rows.length} rows
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-foreground text-background">
            <tr>
              <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em]">
                Flat
              </th>
              <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em]">
                Area
              </th>
              <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em]">
                Facing
              </th>
              <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em]">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/10">
            {filteredRows.map((row) => (
              <tr key={`${row.flat}-${row.area}-${row.facing}-${row.bhk}`} className="transition-colors hover:bg-accent/5">
                <td className="px-5 py-4 font-semibold text-foreground">{row.flat}</td>
                <td className="px-5 py-4 text-muted-foreground">{row.area}</td>
                <td className="px-5 py-4 text-muted-foreground">{row.facing}</td>
                <td className="px-5 py-4">
                  <span className="inline-flex min-w-20 justify-center rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
                    {row.bhk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import type { EMIInputs, EMIResult } from "@/types";
import { Calculator } from "lucide-react";
import { useMemo, useState } from "react";

function calcEMI(inputs: EMIInputs): EMIResult {
  const loanAmount = inputs.propertyPrice - inputs.downPayment;
  const monthlyRate = inputs.interestRate / 12 / 100;
  const n = inputs.tenure * 12;
  const monthlyEMI =
    loanAmount > 0 && monthlyRate > 0
      ? (loanAmount * monthlyRate * (1 + monthlyRate) ** n) /
        ((1 + monthlyRate) ** n - 1)
      : loanAmount / n;
  const totalPayable = monthlyEMI * n;
  const totalInterest = totalPayable - loanAmount;
  return { monthlyEMI, totalPayable, totalInterest, loanAmount };
}

function fmt(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

interface Props {
  open: boolean;
  onClose: () => void;
  defaultPrice?: number;
}

export function EMICalculator({
  open,
  onClose,
  defaultPrice = 8500000,
}: Props) {
  const [inputs, setInputs] = useState<EMIInputs>({
    propertyPrice: defaultPrice,
    downPayment: Math.round(defaultPrice * 0.2),
    interestRate: 8.5,
    tenure: 20,
  });

  const result = useMemo(() => calcEMI(inputs), [inputs]);

  const set = (key: keyof EMIInputs, value: number) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-lg w-full"
        style={{
          background: "oklch(0.15 0.01 0)",
          border: "1px solid oklch(0.22 0.01 0)",
        }}
      >
        <DialogHeader>
          <DialogTitle className="font-display text-xl flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            EMI Calculator
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 pt-2">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Property Price
              </span>
              <span className="text-sm font-semibold text-primary">
                {fmt(inputs.propertyPrice)}
              </span>
            </div>
            <Slider
              min={1000000}
              max={50000000}
              step={100000}
              value={[inputs.propertyPrice]}
              onValueChange={([v]) => {
                set("propertyPrice", v);
                set("downPayment", Math.round(v * 0.2));
              }}
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Down Payment
              </span>
              <span className="text-sm font-semibold text-primary">
                {fmt(inputs.downPayment)} (
                {Math.round((inputs.downPayment / inputs.propertyPrice) * 100)}
                %)
              </span>
            </div>
            <Slider
              min={0}
              max={inputs.propertyPrice}
              step={50000}
              value={[inputs.downPayment]}
              onValueChange={([v]) => set("downPayment", v)}
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Interest Rate
              </span>
              <span className="text-sm font-semibold text-primary">
                {inputs.interestRate}% p.a.
              </span>
            </div>
            <Slider
              min={5}
              max={18}
              step={0.1}
              value={[inputs.interestRate]}
              onValueChange={([v]) => set("interestRate", v)}
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">Loan Tenure</span>
              <span className="text-sm font-semibold text-primary">
                {inputs.tenure} Years
              </span>
            </div>
            <Slider
              min={1}
              max={30}
              step={1}
              value={[inputs.tenure]}
              onValueChange={([v]) => set("tenure", v)}
            />
          </div>

          <div
            className="rounded-lg p-4 grid grid-cols-3 gap-3 text-center"
            style={{
              background: "rgba(212,175,55,0.06)",
              border: "1px solid rgba(212,175,55,0.2)",
            }}
          >
            <div>
              <p className="text-xs text-muted-foreground mb-1">Monthly EMI</p>
              <p className="text-base font-bold text-primary">
                {fmt(result.monthlyEMI)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">
                Total Interest
              </p>
              <p className="text-base font-bold text-foreground">
                {fmt(result.totalInterest)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">
                Total Payable
              </p>
              <p className="text-base font-bold text-foreground">
                {fmt(result.totalPayable)}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Close
            </Button>
            <Button
              className="flex-1 text-primary-foreground hover:shadow-gold-glow transition-smooth"
              style={{ background: "oklch(0.73 0.15 60)" }}
              asChild
            >
              <a href="tel:+918602640017">Book Site Visit</a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

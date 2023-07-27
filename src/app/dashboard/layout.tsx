"use client";
import { PAGE_TRANSITION_CONFIG } from "@/utils/animations/framer-config";
import { AppShell, Flex, Header, Navbar, NavLink } from "@mantine/core";
import {
  IconArchive,
  IconBoxSeam,
  IconChevronRight,
  IconSettings,
  IconUserCheck,
  IconUsers,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, []);

  console.log({ pathname });
  const NAV_ITEMS = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <IconArchive size="1rem" stroke={1.5} />,
      rightSection: <IconChevronRight size="0.8rem" stroke={1.5} />,
    },
    {
      href: "/dashboard/products",
      label: "Products",
      icon: <IconArchive size="1rem" stroke={1.5} />,
      rightSection: <IconChevronRight size="0.8rem" stroke={1.5} />,
    },
    {
      href: "/dashboard/category",
      label: "Category",
      icon: <IconBoxSeam size="1rem" stroke={1.5} />,
      rightSection: <IconChevronRight size="0.8rem" stroke={1.5} />,
    },
    {
      href: "/dashboard/users",
      label: "Users",
      icon: <IconUserCheck size="1rem" stroke={1.5} />,
      rightSection: <IconChevronRight size="0.8rem" stroke={1.5} />,
    },
    {
      href: "/dashboard/customers",
      label: "Customers",
      icon: <IconUsers size="1rem" stroke={1.5} />,
      rightSection: <IconChevronRight size="0.8rem" stroke={1.5} />,
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: <IconSettings size="1rem" stroke={1.5} />,
      rightSection: <IconChevronRight size="0.8rem" stroke={1.5} />,
    },
  ];
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar width={{ base: 220 }} height={"100%"}>
          <Flex gap="sm" direction={"column"}>
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <NavLink
                  label={item.label}
                  icon={item.icon}
                  rightSection={item.rightSection}
                  variant="filled"
                  active={pathname === item.href}
                />
              </Link>
            ))}

            {/* Navbar content */}
          </Flex>
        </Navbar>
      }
      header={<Header height={60}>{/* Header content */}</Header>}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <AnimatePresence mode={"wait"}>
        <motion.div
          variants={PAGE_TRANSITION_CONFIG}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
          <div className="w-full h-full" ref={ref}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </AppShell>
  );
}

import React from "react";
import AdminHead from "../../components/Admin/AdminHead";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { Outlet } from "react-router-dom";
import useGetUser from "../../hooks/auth/useGetUser";
import Loading from "../../components/Loading";

export default function AdminLayout() {
  const { loading } = useGetUser();
  return loading ? (
    <Loading />
  ) : (
    <div className="bg-neutral-300 pt-2 px-2">
      <div className="flex gap-2">
        <AdminSidebar />
        <div className="w-full">
          <AdminHead />
          <div className="p-3 px-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
